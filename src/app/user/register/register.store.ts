import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';
import { AppPageAction, AppState } from 'src/app/store';
import { GenericState } from 'src/core/data';
import { RegisterRequest } from 'src/data/requests';
import { TokenService } from 'src/data/services/token.service';
import { UserService } from 'src/data/services/user.service';

type RegisterState = GenericState<void>;

@Injectable()
export class RegisterStore extends ComponentStore<RegisterState> {
  // PUBLIC PROPERTIES
  readonly status$ = this.select((s) => s.status);

  // EFFECTS
  readonly register = this.effect<RegisterRequest>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ status: 'loading', error: null })),
      switchMap((request) =>
        this.userService.register(request).pipe(
          tapResponse(
            ({ data }) => {
              this.tokenService.save(data.token);
              this.appStore.dispatch(AppPageAction.getUserInfo());
              this.router.navigate(['']);
            },
            (error) =>
              this.patchState({
                status: 'error',
                error: error as string,
              })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly appStore: Store<AppState>
  ) {
    super(<RegisterState>{});
  }

  // PUBLIC METHODS
  checkDuplicate(
    data: string,
    type: 'userName' | 'email'
  ): Observable<boolean> {
    return this.userService
      .checkExist(data, type)
      .pipe(map(({ data }) => data));
  }
}
