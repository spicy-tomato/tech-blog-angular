import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Status } from 'src/core/data';
import { PostSummary } from 'src/data/models';
import { GetPostResponse } from 'src/data/responses';
import { PostService } from 'src/data/services/post.service';

type DetailsPostState = {
  post: GetPostResponse | null;
  userName: string;
  morePost: PostSummary[];
  getPostStatus: Status;
  getMorePostsStatus: Status;
};

@Injectable()
export class DetailsPostStore extends ComponentStore<DetailsPostState> {
  // PUBLIC PROPERTIES
  readonly post$ = this.select((s) => s.post);
  readonly morePost$ = this.select((s) => s.morePost);

  // EFFECTS
  readonly getPost = this.effect<string>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ getPostStatus: 'loading' })),
      switchMap((postId) =>
        this.postService.getById(postId).pipe(
          tapResponse(
            ({ data: post }) =>
              this.patchState({
                getPostStatus: 'success',
                post,
              }),
            () =>
              this.patchState({
                getPostStatus: 'error',
                post: null,
              })
          )
        )
      )
    )
  );

  readonly getMorePosts = this.effect((params$) =>
    params$.pipe(
      tap(() => this.patchState({ getMorePostsStatus: 'loading' })),
      switchMap(() =>
        this.postService.get({ userName: this.get().userName, size: 3 }).pipe(
          tapResponse(
            ({ data }) =>
              this.patchState({
                getMorePostsStatus: 'success',
                morePost: data.posts,
              }),
            () =>
              this.patchState({
                getMorePostsStatus: 'error',
                morePost: [],
              })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(private readonly postService: PostService) {
    super(<DetailsPostState>{
      morePost: [] as PostSummary[],
    });
  }
}
