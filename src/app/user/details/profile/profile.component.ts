import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { takeUntil } from 'rxjs';
import { AppSelector, AppState } from 'src/app/store';
import { UserDetailsStore } from '../details.store';

@Component({
  selector: 'app-user-details-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class UserDetailsProfileComponent {
  // PUBLIC PROPERTIES
  readonly user$ = this.store.user$;
  readonly screenSize$ = this.appStore
    .select(AppSelector.screenSize)
    .pipe(takeUntil(this.destroy$));

  // CONSTRUCTOR
  constructor(
    private readonly store: UserDetailsStore,
    private readonly appStore: Store<AppState>,
    private readonly destroy$: TuiDestroyService
  ) {}
}
