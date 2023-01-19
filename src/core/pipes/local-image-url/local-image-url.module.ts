import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalImageUrlPipe } from './local-image-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LocalImageUrlPipe],
  exports: [LocalImageUrlPipe],
})
export class LocalImageUrlPipeModule {}
