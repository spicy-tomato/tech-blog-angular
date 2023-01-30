import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserDetailsStore } from '../details.store';

@Component({
  selector: 'app-user-details-sub-stories',
  templateUrl: './sub-stories.component.html',
  styleUrls: ['./sub-stories.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsSubStoriesComponent {
  // PUBLIC PROPERTIES
  readonly posts$ = this.store.posts$;

  // CONSTRUCTOR
  constructor(private readonly store: UserDetailsStore) {}
}
