import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import { PostDetailsStore } from '../../details.store';

@Component({
  selector: 'app-post-details-main-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({ appearance: 'flat' }),
    tuiTagOptionsProvider({
      size: 'l',
      status: 'custom',
    }),
  ],
})
export class BodyComponent {
  // VIEWCHILD
  @ViewChild('comments') comments!: ElementRef<HTMLElement>;

  // PUBLIC PROPERTIES
  readonly post$ = this.store.post$;

  // CONSTRUCTOR
  constructor(private readonly store: PostDetailsStore) {}

  // PUBLIC METHODS
  scrollToComments(): void {
    const bodyRect = document.body.getBoundingClientRect();
    const elementRect = this.comments.nativeElement.getBoundingClientRect();
    const offset = elementRect.top - bodyRect.top;
    const headerHeight = getComputedStyle(document.body).getPropertyValue(
      '--header-height'
    );
    const topBarPadding = Number.parseInt(
      headerHeight.substring(0, headerHeight.length - 2)
    );
    const top = offset - topBarPadding;
    window.scroll({ top, behavior: 'smooth' });
  }
}
