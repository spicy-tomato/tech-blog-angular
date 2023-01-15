import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { GenericState } from 'src/core/data';
import { LoginRequest } from 'src/data/requests';
import { TokenService } from 'src/data/services/token.service';
import { UserService } from 'src/data/services/user.service';

type ExamState = GenericState<void>;

@Injectable()
export class LoginStore extends ComponentStore<ExamState> {
  // PUBLIC PROPERTIES
  readonly status$ = this.select((s) => s.status);

  // EFFECTS
  readonly login = this.effect<LoginRequest>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ status: 'loading', error: null })),
      switchMap((request) =>
        this.userService.login(request).pipe(
          tapResponse(
            ({ data }) => {
              this.tokenService.save(data.token);
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
    private readonly userService: UserService
  ) {
    super(<ExamState>{});
  }
}
