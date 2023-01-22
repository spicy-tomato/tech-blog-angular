import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppPageAction, AppState } from 'src/app/store';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent {
  // PUBLIC METHODS
  signOut(): void {
    this.appStore.dispatch(AppPageAction.logOut());
  }

  // CONSTRUCTOR
  constructor(private readonly appStore: Store<AppState>) {}
}
