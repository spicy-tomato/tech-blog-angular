import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiAvatarComponent } from '@taiga-ui/kit';
import { User } from 'src/data/models';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  // INPUT
  @Input() user?: User;
  @Input() showSkeleton = false;
  @Input() size: TuiAvatarComponent['size'] = 's';
}
