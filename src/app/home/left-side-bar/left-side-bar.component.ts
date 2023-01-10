import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSideBarComponent {}
