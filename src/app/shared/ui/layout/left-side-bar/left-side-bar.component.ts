import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { AppSelector, AppState } from 'src/app/store';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiButtonOptionsProvider({ size: 'm', appearance: 'flat' })],
})
export class LeftSideBarComponent {
  //  PUBLIC PROPERTIES
  readonly user$ = this.store.select(AppSelector.user);

  // INPUT
  @Input() isMobile = false;

  // OUTPUT
  @Output() closeSidebar = new EventEmitter<void>();

  // CONSTRUCTOR
  constructor(private store: Store<AppState>) {}
}
