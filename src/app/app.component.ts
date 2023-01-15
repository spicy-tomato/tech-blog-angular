import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  constructor(store: Store<AppState>) {
    store.dispatch(AppPageAction.getUserInfo());
  }
}
