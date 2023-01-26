import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tuiAvatarOptionsProvider, tuiTagOptionsProvider } from '@taiga-ui/kit';
import { HomeStore } from '../../home.store';

@Component({
  selector: 'app-home-main-view-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      size: 'xs',
      appearance: 'flat',
    }),
    tuiTagOptionsProvider({
      size: 'm',
      status: 'custom',
    }),
    tuiAvatarOptionsProvider({
      autoColor: true,
      rounded: true,
      size: 's',
    }),
  ],
})
export class PostsListingComponent {
  // PUBLIC PROPERTIES
  readonly posts$ = this.store.data$;

  // CONSTRUCTOR
  constructor(private readonly store: HomeStore) {
    // store.getPosts();
  }
}
