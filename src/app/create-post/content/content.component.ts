import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  defaultEditorExtensions,
  TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import { delay, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { CreatePostStore, FocusableItem } from '../create-post.store';

const databaseMockData: readonly string[] = [
  `John Cleese`,
  `Eric Idle`,
  `Michael Palin`,
  `Terry Gilliam`,
  `Terry Jones`,
  `Graham Chapman`,
];

@Component({
  selector: 'app-create-post-content',
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
  readonly items$ = this.search$.pipe(
    switchMap((search) =>
      this.serverRequest(search).pipe(startWith<readonly string[] | null>(null))
    ),
    startWith(databaseMockData)
  );
  readonly form = this.fb.group({
    image: [null, Validators.required],
    title: ['Title', Validators.required],
    tags: [[], Validators.required],
    body: ['Body', Validators.required],
  });

  // CONSTRUCTOR
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: CreatePostStore
  ) {}

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

  // PRIVATE METHODS
  private serverRequest(search: string): Observable<readonly string[]> {
    const result = databaseMockData.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    return of(result).pipe(delay(Math.random() * 1000 + 500));
  }
}
