import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { PostDetailsStore } from './details.store';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PostDetailsStore],
})
export class PostDetailsComponent implements OnInit {
  // CONSTRUCTOR
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: PostDetailsStore
  ) {}

  // LIFECYCLE
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          const postId = params['postId'];
          const userName = params['userName'];
          this.store.patchState({ userName });

          this.store.getPost(postId);
          this.store.getMorePosts();
        })
      )
      .subscribe();
  }
}
