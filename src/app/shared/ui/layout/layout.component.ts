import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { RouteHelper } from 'src/core/helpers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  // PUBLIC PROPERTIES
  padding = true;

  // CONSTRUCTOR
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  // LIFECYCLE
  ngOnInit(): void {
    this.getPadding();

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => this.getPadding())
      )
      .subscribe();
  }

  // PRIVATE METHODS
  private getPadding(): void {
    const childRoute = RouteHelper.getChild(this.route.snapshot);
    this.padding = childRoute.data['padding'] ?? true;
  }
}
