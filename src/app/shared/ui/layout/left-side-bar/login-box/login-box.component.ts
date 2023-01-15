import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-left-side-bar-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBoxComponent {}
