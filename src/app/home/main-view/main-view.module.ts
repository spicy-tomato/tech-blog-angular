import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { AvatarModule } from 'src/app/shared/ui/components/avatar/avatar.module';
import { PostCardModule } from 'src/app/shared/ui/components/post-card/post-card.module';
import { MainViewComponent } from './main-view.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import { TabsComponent } from './tabs/tabs.component';

const NGRX = [LetModule];
const TAIGA_UI = [TuiButtonModule, TuiRepeatTimesModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    PostCardModule,
    UrlPipeModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [MainViewComponent, TabsComponent, PostsListingComponent],
  exports: [MainViewComponent],
})
export class HomeMainViewModule {}
