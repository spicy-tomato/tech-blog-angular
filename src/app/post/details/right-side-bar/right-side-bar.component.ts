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
  morePosts = [
    {
      title:
        '9 Common JavaScript Interview Questions You Might Not Know The Answer For.',
      url: '/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g',
      tags: ['javascript', 'webdev', 'programming', 'beginners'],
    },
    {
      title:
        '9 Common JavaScript Interview Questions You Might Not Know The Answer For.',
      url: '/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g',
      tags: ['javascript', 'webdev', 'programming', 'beginners'],
    },
    {
      title:
        '9 Common JavaScript Interview Questions You Might Not Know The Answer For.',
      url: '/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g',
      tags: ['javascript', 'webdev', 'programming', 'beginners'],
    },
    {
      title:
        '9 Common JavaScript Interview Questions You Might Not Know The Answer For.',
      url: '/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g',
      tags: ['javascript', 'webdev', 'programming', 'beginners'],
    },
  ];

  // CONSTRUCTOR
  constructor(private readonly store: DetailsPostStore) {}
}
