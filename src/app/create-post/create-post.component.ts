import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { CreatePostStore } from './create-post.store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less'],
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
