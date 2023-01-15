import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { AppSelector, AppState } from 'src/app/store';

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
  //  PUBLIC PROPERTIES
  readonly user$ = this.store.select(AppSelector.user);
  readonly links: Link[] = [
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

  searchContent = '';
  openDropdown = false;
  openSidebar = false;

  // CONSTRUCTOR
  constructor(private store: Store<AppState>) {}

  // PUBLIC METHODS
  toggleSidebar(open: boolean): void {
    this.openSidebar = open;
  }
}
