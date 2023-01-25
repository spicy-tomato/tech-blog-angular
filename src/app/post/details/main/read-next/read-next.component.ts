import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-details-main-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadNextComponent {
  posts = [
    {
      title: 'LOGICAL OPERATOR',
      author: 'Charos1mm',
      createdAt: new Date(2023, 0, 11),
      url: '/charos1mm/logical-operator-4811',
      avatarUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--vD72nCJl--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/984661/9b1db63d-f6ce-4ed4-82b9-5b0e6a684e8c.png',
    },
    {
      title: 'LOGICAL OPERATOR',
      author: 'Charos1mm',
      createdAt: new Date(2023, 0, 11),
      url: '/charos1mm/logical-operator-4811',
      avatarUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--vD72nCJl--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/984661/9b1db63d-f6ce-4ed4-82b9-5b0e6a684e8c.png',
    },
    {
      title: 'LOGICAL OPERATOR',
      author: 'Charos1mm',
      createdAt: new Date(2023, 0, 11),
      url: '/charos1mm/logical-operator-4811',
      avatarUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--vD72nCJl--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/984661/9b1db63d-f6ce-4ed4-82b9-5b0e6a684e8c.png',
    },
    {
      title: 'LOGICAL OPERATOR',
      author: 'Charos1mm',
      createdAt: new Date(2023, 0, 11),
      url: '/charos1mm/logical-operator-4811',
      avatarUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--vD72nCJl--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/984661/9b1db63d-f6ce-4ed4-82b9-5b0e6a684e8c.png',
    },
  ];
}
