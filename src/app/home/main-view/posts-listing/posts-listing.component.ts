import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';

type AuthorSummary = {
  id: string;
  name: string;
  image: string;
};

type PostSummary = {
  image?: string;
  url: string;
  author: AuthorSummary;
  createdAt: Date;
  title: string;
  tags: string[];
  reactionsCount: number;
  commentsCount: number;
  timeToRead: number;
};

@Component({
  selector: 'app-home-main-view-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      size: 'xs',
      appearance: 'flat',
    }),
    tuiTagOptionsProvider({
      size: 'm',
      status: 'custom',
    }),
  ],
})
export class PostsListingComponent {
  readonly posts: PostSummary[] = [
    {
      image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--CnEPpAi8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ki4kfgh1ok4mn0gnajzc.png',
      author: {
        id: '123456',
        name: 'kataoka_nopeNoshishi jfsao ifaos dfoas d',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
    {
      author: {
        id: '123456',
        name: 'kataoka',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
    {
      author: {
        id: '123456',
        name: 'kataoka_nopeNoshishi',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
    {
      author: {
        id: '123456',
        name: 'kataoka_nopeNoshishi',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
    {
      author: {
        id: '123456',
        name: 'kataoka_nopeNoshishi',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
    {
      author: {
        id: '123456',
        name: 'kataoka_nopeNoshishi',
        image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
      },
      url: '/nopenoshishi/understanding-git-through-images-4an1',
      createdAt: new Date(2023, 0, 5),
      title: 'Understanding Git through images',
      tags: ['git', 'beginner'],
      reactionsCount: 510,
      commentsCount: 14,
      timeToRead: 20,
    },
  ];

  test(o: any) {
    console.log(o);
  }
}
