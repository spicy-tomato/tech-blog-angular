import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-left-side-bar-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBoxComponent {}
