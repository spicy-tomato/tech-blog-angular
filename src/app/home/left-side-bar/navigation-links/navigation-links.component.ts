import { ChangeDetectionStrategy, Component } from '@angular/core';

type MenuItem = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-home-left-side-bar-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinksComponent {
  readonly menuItems: MenuItem[] = [
    { label: 'Home', url: '/home' },
    { label: 'Reading List', url: '/reading-list' },
    { label: 'Listings', url: '/listings' },
    { label: 'Podcasts', url: '/podcasts' },
    { label: 'Videos', url: '/videos' },
    { label: 'Tags', url: '/tags' },
    { label: 'FAQ', url: '/faq' },
    { label: 'Forem Shop', url: '/forem-shop' },
    { label: 'Sponsors', url: '/sponsors' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Guides', url: '/guides' },
    { label: 'Software comparisons', url: '/software comparisons' },
  ];
}
