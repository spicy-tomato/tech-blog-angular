import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-details-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
