import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CreatePostStore } from '../create.store';

@Component({
  selector: 'app-post-create-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // INPUT
  @Input()
  activeItemIndex = 0;

  // OUTPUT
  @Output()
  readonly activeItemIndexChange = new EventEmitter<number>();

  // CONSTRUCTOR
  constructor(private readonly store: CreatePostStore) {}
  
  // PUBLIC METHODS
  onClickPreview(): void {
    this.store.changeFocusItem(null);
    this.activeItemIndexChange.next(1);
  }
}
