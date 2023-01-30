import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Status } from 'src/core/data';
import { PostSummary, UserSummary } from 'src/data/models';
import { PostService } from 'src/data/services/post.service';
import { UserService } from 'src/data/services/user.service';

type UserDetailsState = {
  user: UserSummary;
  posts: PostSummary[];
  getUserStatus: Status;
  getPostsStatus: Status;
};

@Injectable()
export class UserDetailsStore extends ComponentStore<UserDetailsState> {
  // PUBLIC PROPERTIES
  readonly user$ = this.select((s) => s.user);
  readonly posts$ = this.select((s) => s.posts);

  // EFFECTS
  readonly getUser = this.effect<string>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ getUserStatus: 'loading' })),
      switchMap((userName) =>
        this.userService.getByUserName(userName).pipe(
          tapResponse(
            ({ data: user }) =>
              this.patchState({
                getUserStatus: 'success',
                user,
              }),
            () =>
              this.patchState({
                getUserStatus: 'error',
              })
          )
        )
      )
    )
  );

  readonly getPosts = this.effect<{ userName: string; offset?: Date }>(
    (params$) =>
      params$.pipe(
        tap(() => this.patchState({ getPostsStatus: 'loading' })),
        switchMap(({ userName, offset }) =>
          this.postService.get({ userName, offset: offset?.toString() }).pipe(
            tapResponse(
              ({ data }) =>
                this.patchState({
                  getPostsStatus: 'success',
                  posts: data.posts,
                }),
              () =>
                this.patchState({
                  getPostsStatus: 'error',
                  posts: [],
                })
            )
          )
        )
      )
  );

  // CONSTRUCTOR
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {
    super(<UserDetailsState>{
      posts: [] as PostSummary[],
    });
  }
}
