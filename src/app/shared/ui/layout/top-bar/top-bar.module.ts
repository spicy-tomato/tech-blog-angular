import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiAvatarModule, TuiInputModule } from '@taiga-ui/kit';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { LeftSideBarModule } from 'src/app/shared/ui/layout/left-side-bar/left-side-bar.module';
import { TopBarComponent } from './top-bar.component';

const NGRX = [LetModule];
const TAIGA_UI = [
  TuiActiveZoneModule,
  TuiAvatarModule,
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiInputModule,
  TuiLoaderModule,
  TuiSidebarModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UrlPipeModule,
    LeftSideBarModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
