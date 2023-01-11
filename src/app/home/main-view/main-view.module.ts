import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { MainViewComponent } from './main-view.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import { TabsComponent } from './tabs/tabs.component';

const TAIGA_UI = [TuiButtonModule, TuiDropdownModule, TuiHostedDropdownModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...TAIGA_UI],
  declarations: [MainViewComponent, TabsComponent, PostsListingComponent],
  exports: [MainViewComponent],
})
export class HomeMainViewModule {}
