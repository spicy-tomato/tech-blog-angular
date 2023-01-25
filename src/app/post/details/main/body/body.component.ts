import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';
import { tuiTagOptionsProvider } from '@taiga-ui/kit';
import { DetailsPostStore } from '../../details.store';

@Component({
  selector: 'app-post-details-main-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'flat',
      size: 'm',
    }),
    tuiTagOptionsProvider({
      size: 'l',
      status: 'custom',
    }),
  ],
})
export class BodyComponent {
  // PUBLIC PROPERTIES
  readonly post$ = this.store.post$;

  // CONSTRUCTOR
  constructor(private readonly store: DetailsPostStore) {}
}
