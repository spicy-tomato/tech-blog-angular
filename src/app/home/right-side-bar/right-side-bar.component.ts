import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSideBarComponent {}
