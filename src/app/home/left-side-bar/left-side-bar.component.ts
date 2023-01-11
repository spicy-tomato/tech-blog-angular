import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-home-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ size: 'm', appearance: 'flat' })],
})
export class LeftSideBarComponent {}
