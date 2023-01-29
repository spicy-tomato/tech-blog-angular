import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import { PostSummary } from 'src/data/models';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      size: 's',
      appearance: 'icon',
    }),
    tuiTagOptionsProvider({
      size: 'm',
      status: 'custom',
    }),
  ],
})
export class PostCardComponent {
  // INPUT
  @Input() post!: PostSummary;
  @Input() displayImage = false;
}
