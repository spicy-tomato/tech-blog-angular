import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GetPostResponse } from 'src/data/responses';

@Component({
  selector: 'app-post-details-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSideBarComponent {
  @Input() post!: GetPostResponse;
}
