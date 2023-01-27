import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

const TAIGA_UI = [TuiAvatarModule];

@NgModule({
  imports: [CommonModule, ...TAIGA_UI],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarModule {}
