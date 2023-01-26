import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Status } from 'src/core/data';
import { GetPostResponse } from 'src/data/responses';
import { PostService } from 'src/data/services/post.service';

type DetailsPostState = {
  post: GetPostResponse | null;
  status: Status;
};

@Injectable()
export class DetailsPostStore extends ComponentStore<DetailsPostState> {
  // PUBLIC PROPERTIES
  readonly post$ = this.select((s) => s.post);

  // EFFECTS
  readonly getPost = this.effect<string>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ status: 'loading' })),
      switchMap((postId) =>
        this.postService.getById(postId).pipe(
          tapResponse(
            ({ data: post }) =>
              this.patchState({
                status: 'success',
                post,
              }),
            () =>
              this.patchState({
                status: 'error',
                post: null,
              })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(private readonly postService: PostService) {
    super(<DetailsPostState>{});
  }
}
