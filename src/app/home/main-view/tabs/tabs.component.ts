import { ChangeDetectionStrategy, Component } from '@angular/core';

type UrlButton = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-home-main-view-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  readonly urlButtons: UrlButton[] = [
    { label: 'Relevant', url: '/' },
    { label: 'Latest', url: '/latest' },
    { label: 'Top', url: '/top' },
  ];
}
