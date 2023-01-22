import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-post-create-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  // PUBLIC PROPERTIES
  @Output() readonly publish = new EventEmitter<void>();
  @Output() readonly saveAsDraft = new EventEmitter<void>();
}
