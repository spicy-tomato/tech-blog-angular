import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LetModule } from '@ngrx/component';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { LayoutModule } from 'src/app/shared/ui/layout/layout.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';

const NGRX = [LetModule];
const TAIGA_UI = [
  TuiButtonModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    RegisterRoutingModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
