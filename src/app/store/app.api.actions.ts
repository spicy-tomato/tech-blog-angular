import { createAction, props } from '@ngrx/store';
import { User } from 'src/data/models';

export class AppApiAction {
  static readonly getUserInfoSuccessful = createAction(
    '[App/API] Get user info successful',
    props<{ user: User }>()
  );
  static readonly getUserInfoFailed = createAction(
    '[App/API] Get user info failed'
  );
}
