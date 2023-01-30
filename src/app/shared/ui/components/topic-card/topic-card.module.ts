import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCardComponent } from './topic-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopicCardComponent],
  exports: [TopicCardComponent],
})
export class TopicCardModule {}
