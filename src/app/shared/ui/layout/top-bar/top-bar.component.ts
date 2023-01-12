import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

type User = {
  image: string;
  name: string;
  username: string;
};

type Link = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      size: 'm',
      appearance: 'flat',
    }),
  ],
})
export class TopBarComponent {
  searchContent = '';
  openDropdown = false;
  loggedUser: User | null = {
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--YCB-4jRF--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972087/1b8d0dd0-d860-40c9-b7b3-c7f5e96b66ff.jpg',
    name: 'An Nguyen',
    username: 'annguyen',
  };
  links: Link[] = [
    {
      label: 'Dashboard',
      url: '/dashboard',
    },
    {
      label: 'Create post',
      url: '/new',
    },
    {
      label: 'Reading List',
      url: '/reading-list',
    },
    {
      label: 'Settings',
      url: '/settings',
    },
    {
      label: 'Sign Out',
      url: '/sign-out',
    },
  ];
}
