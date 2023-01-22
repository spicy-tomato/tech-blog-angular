import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { CreatePostStore } from './post-create.store';

@Component({
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.less'],
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
