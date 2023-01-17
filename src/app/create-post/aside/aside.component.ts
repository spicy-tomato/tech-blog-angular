import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideUp } from 'src/animations';
import { CreatePostStore } from '../create-post.store';

@Component({
  selector: 'app-create-post-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideUp]
})
export class AsideComponent {
  // PUBLIC PROPERTIES
  focusItem$ = this.store.focusItem$;
  helpYPosition$ = this.store.helpYPosition$;

  // CONSTRUCTOR
  constructor(private readonly store: CreatePostStore) {}
}
