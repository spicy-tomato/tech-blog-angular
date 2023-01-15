import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { LoginStore } from './login.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginStore, tuiButtonOptionsProvider({ size: 'm' })],
})
export class LoginComponent {
  // PUBLIC PROPERTIES
  readonly form = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });
  readonly status$ = this.store.status$;

  // CONSTRUCTOR
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: LoginStore
  ) {}

  // PUBLIC METHODS
  login(): void {
    const { ...loginForm } = this.form.value;
    this.store.login(loginForm);
  }
}
