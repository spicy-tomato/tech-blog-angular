import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlPipe } from './url-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UrlPipe],
  exports: [UrlPipe],
})
export class UrlPipeModule {}
