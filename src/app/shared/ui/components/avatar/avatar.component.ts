import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiAvatarComponent } from '@taiga-ui/kit';
import { UserSummary } from 'src/data/models';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  // INPUT
  @Input() user?: UserSummary | null;
  @Input()
  get size(): TuiAvatarComponent['size'] {
    return this._size;
  }
  set size(value: TuiAvatarComponent['size']) {
    this._size = value;
    if (['xl', 'xxl'].includes(value)) {
      this.paddingSize = 'p-2';
    } else {
      this.paddingSize = 'p-1';
    }
  }

  @Input() padding = false;
  @Input() showSkeleton = false;

  // PUBLIC PROPERTIES
  paddingSize: 'p-1' | 'p-2' = 'p-1';

  // PRIVATE PROPERTIES
  _size: TuiAvatarComponent['size'] = 's';
}
