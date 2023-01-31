import { createReducer, on } from '@ngrx/store';
import { AppApiAction } from 'src/app/store/app.api.actions';
import { AppPageAction } from 'src/app/store/app.page.actions';
import { AppState } from 'src/app/store/app.state';
import { ResponsiveHelper } from 'src/core/helpers';

const initialState: AppState = {
  user: null,
  status: 'idle',
  screenSize: ResponsiveHelper.getResponsiveSize(window.innerWidth),
};

export const appFeatureKey = '[NGRX Key] App';

export const appReducer = createReducer(
  initialState,
  on(AppPageAction.getUserInfo, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(AppPageAction.logOut, (state) => ({
    ...state,
    user: null,
  })),
  on(AppPageAction.resize, (state, { width }) => ({
    ...state,
    screenSize: ResponsiveHelper.getResponsiveSize(width),
  })),
  on(AppApiAction.noCacheUserInfo, (state) => ({
    ...state,
    status: 'success',
  })),
  on(AppApiAction.getUserInfoSuccessful, (state, { user }) => ({
    ...state,
    user,
    status: 'success',
  })),
  on(AppApiAction.getUserInfoFailed, (state) => ({
    ...state,
    user: null,
    status: 'error',
  }))
);
