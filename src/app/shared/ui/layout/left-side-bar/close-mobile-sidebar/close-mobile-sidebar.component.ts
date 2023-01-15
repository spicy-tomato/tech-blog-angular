import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-side-bar-close-mobile-sidebar',
  templateUrl: './close-mobile-sidebar.component.html',
  styleUrls: ['./close-mobile-sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseMobileSidebarComponent {
  // OUTPUT
  @Output() closeSidebar = new EventEmitter<void>();
}
