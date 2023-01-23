import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import { GetPostResponse } from 'src/data/responses';

@Component({
  selector: 'app-post-details-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiTagOptionsProvider({
      size: 'm',
      status: 'custom',
    }),
  ],
})
export class MainComponent {
  @Input() post!: GetPostResponse;
}
