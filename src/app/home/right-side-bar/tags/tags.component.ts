import { ChangeDetectionStrategy, Component } from '@angular/core';

type TagTopic = {
  tag: string;
  posts: {
    url: string;
    title: string;
    commentsCount: number;
    isNew?: boolean;
  }[];
};

@Component({
  selector: 'app-home-right-side-bar-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  readonly tagTopics: TagTopic[] = [
    {
      tag: 'help',
      posts: [
        {
          url: '/alex99/modal-angular-497b',
          title: 'Modal Angular',
          commentsCount: 0,
          isNew: true,
        },
      ],
    },
    {
      tag: 'discuss',
      posts: [
        {
          url: '/alex99/modal-angular-497b',
          title: 'Modal Angular',
          commentsCount: 0,
        },
        {
          url: '/alex99/modal-angular-497b',
          title: 'Modal Angular',
          commentsCount: 0,
          isNew: true,
        },
      ],
    },
  ];
}
