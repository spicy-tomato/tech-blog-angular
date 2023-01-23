import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { CreatePostStore } from './create.store';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CreatePostStore,
    tuiButtonOptionsProvider({
      appearance: 'flat',
      size: 'm',
    }),
  ],
})
export class CreatePostComponent {
  // PUBLIC PROPERTIES
  activeItemIndex = 0;
}
