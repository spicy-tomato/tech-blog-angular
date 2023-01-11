import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ size: 'm' })],
})
export class TopBarComponent {
  searchContent = '';
}
