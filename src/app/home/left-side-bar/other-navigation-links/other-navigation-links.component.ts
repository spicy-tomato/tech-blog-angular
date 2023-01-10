import { ChangeDetectionStrategy, Component } from '@angular/core';

type MenuItem = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-home-left-side-bar-other-navigation-links',
  templateUrl: './other-navigation-links.component.html',
  styleUrls: ['./other-navigation-links.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherNavigationLinksComponent {
  readonly menuItems: MenuItem[] = [
    { label: 'Code of Conduct', url: '/code-of-conduct' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms of Use', url: '/term-of-use' },
  ];
}
