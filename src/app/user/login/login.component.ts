import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tap } from 'rxjs';
import { LoginStore } from './login.store';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginStore, tuiButtonOptionsProvider({ size: 'm' })],
})
export class LoginComponent {
  // PUBLIC PROPERTIES
  readonly form = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false],
    validator: [''],
  });
  readonly status$ = this.store.status$;

  // CONSTRUCTOR
  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly store: LoginStore
  ) {
    this.handleStatusChange();
  }

  // PUBLIC METHODS
  login(): void {
    if (this.form.valid) {
      const { ...loginForm } = this.form.value;
      this.store.login(loginForm);
    }
  }

  // PRIVATE METHODS
  private handleStatusChange(): void {
    this.status$
      .pipe(
        tap((status) => {
          if (status === 'error') {
            this.form.setErrors({ validator: 'Username or password is wrong' });
          }
        })
      )
      .subscribe();
  }
}
