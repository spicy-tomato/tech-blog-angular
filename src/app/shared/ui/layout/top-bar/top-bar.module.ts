import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiAvatarModule, TuiInputModule } from '@taiga-ui/kit';
import { TopBarComponent } from './top-bar.component';

const TAIGA_UI = [
  TuiAvatarModule,
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiInputModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ...TAIGA_UI],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
