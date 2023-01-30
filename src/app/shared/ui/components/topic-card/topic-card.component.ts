import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCardComponent {}
