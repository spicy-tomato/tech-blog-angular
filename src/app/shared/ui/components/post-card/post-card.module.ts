import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { TuiTagModule } from '@taiga-ui/kit';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { AvatarModule } from 'src/app/shared/ui/components/avatar/avatar.module';
import { PostCardComponent } from './post-card.component';

const TAIGA_UI = [
  TuiButtonModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiTagModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    UrlPipeModule,
    ...TAIGA_UI,
  ],
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
})
export class PostCardModule {}
