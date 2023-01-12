import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconConstant } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-home-left-side-bar-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {
  readonly IconConstant = IconConstant;
}
