import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';
import { TopBarModule } from './top-bar/top-bar.module';

@NgModule({
  imports: [CommonModule, TopBarModule, FooterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
