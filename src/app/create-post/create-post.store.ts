import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Status } from 'src/core/data';
import { PostService } from 'src/data/services/post.service';

export type FocusableItem = 'title' | 'tags' | 'body' | null;

type CreatePostState = {
  focusItem: FocusableItem;
  helpYPosition: number;
  uploadCoverImageStatus: Status;
  coverImageUrl: string;
};

@Injectable()
export class CreatePostStore extends ComponentStore<CreatePostState> {
  // PUBLIC PROPERTIES
  readonly focusItem$ = this.select((s) => s.focusItem);
  readonly helpYPosition$ = this.select((s) => s.helpYPosition);
  readonly coverImageUrl$ = this.select((s) => s.coverImageUrl);
  readonly uploadCoverImageStatus$ = this.select(
    (s) => s.uploadCoverImageStatus
  );

  // EFFECTS
  readonly uploadCoverImage = this.effect<FormData>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ uploadCoverImageStatus: 'loading' })),
      switchMap((formData) =>
        this.postService.uploadCoverImage(formData).pipe(
          tapResponse(
            ({ data }) =>
              this.patchState({
                uploadCoverImageStatus: 'success',
                coverImageUrl: data.url,
              }),
            () =>
              this.patchState({
                uploadCoverImageStatus: 'error',
                coverImageUrl: '',
              })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(private readonly postService: PostService) {
    super(<CreatePostState>{
      focusItem: null,
      helpYPosition: 0,
    });
  }

  // PUBLIC METHODS
  changeFocusItem(focusItem: FocusableItem, helpYPosition = 0): void {
    this.patchState({ focusItem, helpYPosition });
  }
}
