import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailtoPipe } from './mailto-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MailtoPipe],
  exports: [MailtoPipe],
})
export class MailtoPipeModule {}
