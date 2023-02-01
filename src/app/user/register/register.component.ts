import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { map, switchMap, timer } from 'rxjs';
import { StringHelper } from 'src/core/helpers';
import { differentControlValueValidator } from 'src/core/validators';
import { RegisterStore } from './register.store';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RegisterStore],
})
export class RegisterComponent {
  // PUBLIC PROPERTIES
  readonly form = this.fb.group({
    userName: ['' as string, Validators.required],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    remember: [false],
    validator: [''],
  });
  readonly status$ = this.store.status$;

  // CONSTRUCTOR
  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly store: RegisterStore
  ) {
    // this.handleStatusChange();
    this.form.controls['userName'].addAsyncValidators(
      this.checkExistsUserNameFunc('userName')
    );
    this.form.controls['email'].addAsyncValidators(
      this.checkExistsUserNameFunc('email')
    );

    this.form.controls['confirmPassword'].addValidators(
      differentControlValueValidator(this.form.controls['password'], {
        error: new TuiValidationError('Confirm password does not match!'),
      })
    );
  }

  // PUBLIC METHODS
  register(): void {
    if (this.form.valid) {
      const { confirmPassword, remember, validator, ...registerForm } =
        this.form.getRawValue();
      this.store.register({
        ...registerForm,
        password: StringHelper.md5(registerForm.password),
      });
    }
  }

  checkExistsUserNameFunc(type: 'userName' | 'email'): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return timer(500).pipe(
        switchMap(() => this.store.checkDuplicate(control.value, type)),
        map((existed) =>
          existed
            ? {
                error: new TuiValidationError(
                  `${StringHelper.toCapitalCase(type)} has been taken`
                ),
              }
            : null
        )
      );
    };
  }
}
