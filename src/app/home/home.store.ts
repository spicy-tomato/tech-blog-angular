import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { GenericState } from 'src/core/data';
import { PostSummary } from 'src/data/models';
import { PostService } from 'src/data/services/post.service';

type HomeState = GenericState<PostSummary[]>;

@Injectable()
export class HomeStore extends ComponentStore<HomeState> {
  // PUBLIC PROPERTIES
  readonly status$ = this.select((s) => s.status);
  readonly data$ = this.select((s) => s.data);

  // EFFECTS
  readonly getPosts = this.effect((params$) =>
    params$.pipe(
      tap(() => this.patchState({ status: 'loading', error: null })),
      switchMap(() =>
        this.postService.get().pipe(
          tapResponse(
            ({ data }) =>
              this.patchState({
                data: data.posts,
                status: 'success',
              }),
            (error) =>
              this.patchState({
                status: 'error',
                error: error as string,
              })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(private readonly postService: PostService) {
    super(<HomeState>{});
  }
}
