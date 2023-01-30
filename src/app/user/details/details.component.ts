import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { UserDetailsStore } from './details.store';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserDetailsStore],
})
export class UserDetailsComponent implements OnInit {
  // CONSTRUCTOR
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: UserDetailsStore
  ) {}

  // LIFECYCLE
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          const userName = params['userName'];
          this.store.getUser(userName);
          this.store.getPosts({ userName });
        })
      )
      .subscribe();
  }
}
