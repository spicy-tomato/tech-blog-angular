import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CreatePostStore } from '../create.store';

@Component({
  selector: 'app-post-create-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  // OUTPUT
  @Output() readonly publish = new EventEmitter<void>();
  @Output() readonly saveAsDraft = new EventEmitter<void>();

  // PUBLIC PROPERTIES
  readonly publishStatus$ = this.store.publishStatus$;
  readonly disablePublish$ = this.store.disablePublish$;

  // CONSTRUCTOR
  constructor(private readonly store: CreatePostStore) {}
}
