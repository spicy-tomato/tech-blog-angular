import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  defaultEditorExtensions,
  TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import {
  delay,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { PostMode } from 'src/data/models';
import { CreatePostStore, FocusableItem } from '../create.store';

const databaseMockData: readonly string[] = [
  `John Cleese`,
  `Eric Idle`,
  `Michael Palin`,
  `Terry Gilliam`,
  `Terry Jones`,
  `Graham Chapman`,
];

@Component({
  selector: 'app-post-create-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'custom',
    }),
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
  ],
})
export class ContentComponent {
  // INPUT
  @Input()
  activeItemIndex = 0;

  // VIEWCHILD
  @ViewChild('title') title!: ElementRef<HTMLDivElement>;
  @ViewChild('tags') tags!: ElementRef<HTMLDivElement>;
  @ViewChild('body') body!: ElementRef<HTMLDivElement>;

  // PRIVATE PROPERTIES
  private readonly search$ = new Subject<string>();

  // PUBLIC PROPERTIES
  readonly coverImageUrl$ = this.store.coverImageUrl$;
  readonly uploadCoverImageStatus$ = this.store.uploadCoverImageStatus$;
  readonly items$ = this.search$.pipe(
    switchMap((search) =>
      this.serverRequest(search).pipe(startWith<readonly string[] | null>(null))
    ),
    startWith(databaseMockData)
  );
  readonly form = this.fb.group({
    image: ['', Validators.required],
    title: ['', Validators.required],
    tags: [[] as string[], Validators.required],
    body: ['', Validators.required],
  });

  // CONSTRUCTOR
  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly store: CreatePostStore
  ) {
    this.handleChangeCoverImage();
  }

  // PUBLIC METHODS
  changeFocusItem(focusItem: FocusableItem): void {
    let helpYPosition = 0;
    if (focusItem) {
      helpYPosition = Math.max(
        this[focusItem].nativeElement.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          55,
        0
      );
    }
    this.store.changeFocusItem(focusItem, helpYPosition);
  }

  onSearchChange(search: string): void {
    this.search$.next(search);
  }

  onFileChange(e: Event): void {
    const formData = new FormData();
    const image = (e.target as HTMLInputElement)?.files?.[0];
    if (image) {
      formData.append('file', image, image.name);
      this.store.uploadCoverImage(formData);
    }
  }

  onRemoveCoverImage(): void {
    this.form.patchValue({ image: '' });
  }

  publish(mode: PostMode): void {
    this.store.publish({ ...this.form.value, mode });
  }

  // PRIVATE METHODS
  private handleChangeCoverImage(): void {
    this.coverImageUrl$
      .pipe(tap((image) => this.form.patchValue({ image })))
      .subscribe();
  }

  private serverRequest(search: string): Observable<readonly string[]> {
    const result = databaseMockData.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    return of(result).pipe(delay(Math.random() * 1000 + 500));
  }
}
