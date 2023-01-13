import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { LayoutModule } from 'src/app/shared/ui/layout/layout.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

const TAIGA_UI = [
  TuiButtonModule,
  TuiCheckboxLabeledModule,
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
    ...TAIGA_UI,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
