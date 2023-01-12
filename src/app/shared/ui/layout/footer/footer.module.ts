import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

const TAIGA_UI = [TuiLinkModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...TAIGA_UI],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
