import { createAction, props } from '@ngrx/store';
import { UserSummary } from 'src/data/models';

export class AppApiAction {
  static readonly getUserInfoSuccessful = createAction(
    '[App/API] Get user info successful',
    props<{ user: UserSummary }>()
  );
  static readonly getUserInfoFailed = createAction(
    '[App/API] Get user info failed'
  );
}
