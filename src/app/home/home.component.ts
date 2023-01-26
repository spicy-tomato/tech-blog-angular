import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeStore } from './home.store';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeStore],
})
export class HomeComponent {
  // CONSTRUCTOR
  constructor(store: HomeStore) {
    store.getPosts();
  }
}
