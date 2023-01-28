import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-home-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ appearance: 'flat' })],
})
export class MainViewComponent {}
