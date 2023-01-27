import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-post-details-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  // VIEWCHILD
  @ViewChild(BodyComponent) body!: BodyComponent;

  // PUBLIC METHODS
  scrollToComments(): void {
    this.body.scrollToComments();
  }
}
