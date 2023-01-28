import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostDetailsStore } from '../details.store';

@Component({
  selector: 'app-post-details-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSideBarComponent {
  // PUBLIC PROPERTIES
  readonly post$ = this.store.post$;
  readonly morePosts$ = this.store.morePost$;

  // CONSTRUCTOR
  constructor(private readonly store: PostDetailsStore) {}
}
