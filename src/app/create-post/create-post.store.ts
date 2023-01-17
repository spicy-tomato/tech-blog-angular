import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export type FocusableItem = 'title' | 'tags' | 'body' | null;

type CreatePostState = {
  focusItem: FocusableItem;
  helpYPosition: number;
};

@Injectable()
export class CreatePostStore extends ComponentStore<CreatePostState> {
  // PUBLIC PROPERTIES
  readonly focusItem$ = this.select((s) => s.focusItem);
  readonly helpYPosition$ = this.select((s) => s.helpYPosition);

  // CONSTRUCTOR
  constructor() {
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
