import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

const ZORRO = [NzButtonModule, NzImageModule, NzInputModule, NzIconModule];

@NgModule({
  imports: [CommonModule, ...ZORRO],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
