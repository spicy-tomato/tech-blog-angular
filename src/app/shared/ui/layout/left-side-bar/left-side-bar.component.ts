import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {
  tuiButtonOptionsProvider,
  TuiDurationOptions,
  tuiFadeIn,
  tuiHeightCollapse,
} from '@taiga-ui/core';
import { takeUntil } from 'rxjs';
import { AppSelector, AppState } from 'src/app/store';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TuiDestroyService,
    tuiButtonOptionsProvider({ size: 'm', appearance: 'flat' }),
  ],
  animations: [tuiFadeIn, tuiHeightCollapse],
})
export class LeftSideBarComponent {
  //  PUBLIC PROPERTIES
  readonly user$ = this.store
    .select(AppSelector.user)
    .pipe(takeUntil(this.destroy$));
  readonly status$ = this.store
    .select(AppSelector.status)
    .pipe(takeUntil(this.destroy$));
  readonly durationOptions: TuiDurationOptions = {
    value: '',
    params: { duration: 500 },
  };

  // INPUT
  @Input() isMobile = false;

  // OUTPUT
  @Output() closeSidebar = new EventEmitter<void>();

  // CONSTRUCTOR
  constructor(
    private readonly destroy$: TuiDestroyService,
    private readonly store: Store<AppState>
  ) {}
}
