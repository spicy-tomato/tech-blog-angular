import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { tap } from 'rxjs';
import { DetailsPostStore } from './details.store';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DetailsPostStore],
})
export class PostDetailsComponent {
  // CONSTRUCTOR
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: DetailsPostStore
  ) {
    this.route.params
      .pipe(
        tap((params) => {
          const postId = params['postId'];
          store.getPost(postId);
        })
      )
      .subscribe();
  }
}
