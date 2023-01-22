import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { LayoutModule } from 'src/app/shared/ui/layout/layout.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';

const TAIGA_UI = [TuiButtonModule, TuiLinkModule];

@NgModule({
  imports: [CommonModule, LayoutModule, RegisterRoutingModule, ...TAIGA_UI],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
