import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {}
