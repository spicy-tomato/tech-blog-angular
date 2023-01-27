import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Status } from 'src/core/data';
import { PublishPostRequest } from 'src/data/requests';
import { ImageService } from 'src/data/services/image.service';
import { PostService } from 'src/data/services/post.service';

export type FocusableItem = 'title' | 'tags' | 'body' | null;

type CreatePostState = {
  focusItem: FocusableItem;
  helpYPosition: number;
  coverImageUrl: string;
  uploadCoverImageStatus: Status;
  publishStatus: Status;
  disablePublish: boolean;
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
  readonly publishStatus$ = this.select((s) => s.publishStatus);
  readonly disablePublish$ = this.select((s) => s.disablePublish);

  // EFFECTS
  readonly uploadCoverImage = this.effect<File>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ uploadCoverImageStatus: 'loading' })),
      switchMap((file) =>
        this.imageService.uploadCoverImage(file).pipe(
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

  readonly publish = this.effect<PublishPostRequest>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ publishStatus: 'loading' })),
      switchMap((request) =>
        this.postService.publish(request).pipe(
          tapResponse(
            ({ data: postUrl }) => {
              this.patchState({ publishStatus: 'success' });
              this.router.navigate([postUrl]);
            },
            () => this.patchState({ publishStatus: 'error' })
          )
        )
      )
    )
  );

  // CONSTRUCTOR
  constructor(
    private readonly router: Router,
    private readonly postService: PostService,
    private readonly imageService: ImageService
  ) {
    super(<CreatePostState>{
      focusItem: null,
      helpYPosition: 0,
      disablePublish: true,
    });
  }

  // PUBLIC METHODS
  changeFocusItem(focusItem: FocusableItem, helpYPosition = 0): void {
    this.patchState({ focusItem, helpYPosition });
  }

  togglePublish(disablePublish: boolean): void {
    this.patchState({ disablePublish });
  }
}
