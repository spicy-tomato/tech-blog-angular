import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { DetailsPostStore } from '../details.store';

@Component({
  selector: 'app-post-details-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ size: 'm' })],
})
export class RightSideBarComponent {
  // PUBLIC PROPERTIES
  readonly post$ = this.store.post$;
  readonly morePosts$ = this.store.morePost$;

  // CONSTRUCTOR
  constructor(private readonly store: DetailsPostStore) {}
}
