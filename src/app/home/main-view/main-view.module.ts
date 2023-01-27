import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { TuiTagModule } from '@taiga-ui/kit';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { AvatarModule } from 'src/app/shared/ui/components/avatar/avatar.module';
import { MainViewComponent } from './main-view.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import { TabsComponent } from './tabs/tabs.component';

const NGRX = [LetModule];
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
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [MainViewComponent, TabsComponent, PostsListingComponent],
  exports: [MainViewComponent],
})
export class HomeMainViewModule {}
