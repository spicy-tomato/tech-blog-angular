import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { LayoutModule } from 'src/app/shared/ui/layout/layout.module';
import { SignOutComponent } from './sign-out.component';
import { SignOutRoutingModule } from './sign-out.routing';

const TAIGA_UI = [TuiButtonModule];

@NgModule({
  imports: [CommonModule, LayoutModule, SignOutRoutingModule, ...TAIGA_UI],
  declarations: [SignOutComponent],
})
export class SignOutModule {}
