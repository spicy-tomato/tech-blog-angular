import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeStore } from '../../home.store';

@Component({
  selector: 'app-home-main-view-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListingComponent {
  // PUBLIC PROPERTIES
  readonly posts$ = this.store.data$;
  readonly status$ = this.store.status$;
  // readonly

  // CONSTRUCTOR
  constructor(private readonly store: HomeStore) {
    // store.getPosts();
  }
}
