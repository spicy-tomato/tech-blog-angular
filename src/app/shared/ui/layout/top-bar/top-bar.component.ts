import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {
  tuiButtonOptionsProvider,
  TuiDurationOptions,
  tuiFadeIn,
} from '@taiga-ui/core';
import { takeUntil } from 'rxjs';
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
    TuiDestroyService,
    tuiButtonOptionsProvider({
      size: 'm',
      appearance: 'flat',
    }),
  ],
  animations: [tuiFadeIn],
})
export class TopBarComponent {
  //  PUBLIC PROPERTIES
  readonly user$ = this.store
    .select(AppSelector.user)
    .pipe(takeUntil(this.destroy$));
  readonly status$ = this.store
    .select(AppSelector.status)
    .pipe(takeUntil(this.destroy$));
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
  readonly durationOptions: TuiDurationOptions = {
    value: '',
    params: { duration: 500 },
  };

  searchContent = '';
  openDropdown = false;
  openSidebar = false;

  // CONSTRUCTOR
  constructor(
    private readonly store: Store<AppState>,
    private readonly destroy$: TuiDestroyService
  ) {}

  // PUBLIC METHODS
  toggleSidebar(open: boolean): void {
    this.openSidebar = open;
  }

  onClickDropdownItem(): void {
    this.openDropdown = false;
  }
}
