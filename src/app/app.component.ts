import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppPageAction, AppState } from 'src/app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // CONSTRUCTOR
  constructor(private readonly store: Store<AppState>) {
    store.dispatch(AppPageAction.getUserInfo());
  }

  // HOST LISTENER
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.store.dispatch(
      AppPageAction.resize({ width: (event.target as Window).innerWidth })
    );
  }
}
