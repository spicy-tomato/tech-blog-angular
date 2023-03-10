import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  tuiButtonOptionsProvider,
  tuiHintOptionsProvider,
} from '@taiga-ui/core';
import { PostDetailsStore } from '../details.store';

@Component({
  selector: 'app-post-details-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'flat',
      shape: 'rounded',
      size: 'm',
    }),
    tuiHintOptionsProvider({
      showDelay: 50,
      hideDelay: 100,
      appearance: 'darkHint',
      direction: 'bottom',
    }),
  ],
})
export class LeftSideBarComponent {
  // OUTPUT
  @Output() readonly scrollToComments = new EventEmitter<void>();

  // PUBLIC PROPERTIES
  readonly post$ = this.store.post$;

  // CONSTRUCTOR
  constructor(private readonly store: PostDetailsStore) {}
}
