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
  TuiCheckboxLabeledModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { LayoutModule } from 'src/app/shared/ui/layout/layout.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

const NGRX = [LetModule];
const TAIGA_UI = [
  TuiButtonModule,
  TuiCheckboxLabeledModule,
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
    LoginRoutingModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
