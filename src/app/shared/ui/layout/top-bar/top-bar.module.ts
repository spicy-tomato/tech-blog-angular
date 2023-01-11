import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

const TAIGA_UI = [
  TuiButtonModule,
  TuiTextfieldControllerModule,
  TuiInputModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ...TAIGA_UI],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
