import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetPostResponse } from 'src/data/responses';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent {
  post: GetPostResponse = {
    id: 'new-post-4',
    title: 'New post 4',
    body: 'Post body',
    image: 'https://ik.imagekit.io/snowflower/ci/test_image.png',
    viewCount: 0,
    likeCount: 0,
    shareCount: 0,
    trendingPoint: 0,
    createdAt: new Date('2023-01-22T23:40:33.161107'),
    updatedAt: new Date('2023-01-22T23:40:33.161107'),
    user: {
      fullName: 'New User',
      userName: 'newuser004',
      email: 'newuser004@endpointdev.com',
    },
    tags: ['test2'],
  };
}
