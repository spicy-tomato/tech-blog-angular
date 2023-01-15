import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ size: 'm', appearance: 'flat' })],
})
export class LeftSideBarComponent {
  // INPUT
  @Input() isMobile = false;

  // OUTPUT
  @Output() closeSidebar = new EventEmitter<void>();
}
