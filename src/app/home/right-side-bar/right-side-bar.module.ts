import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSideBarComponent } from './right-side-bar.component';
import { ListingsComponent } from './listings/listings.component';
import { TagsComponent } from './tags/tags.component';
import { TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TuiTagModule } from '@taiga-ui/kit';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { TopicCardModule } from 'src/app/shared/ui/components/topic-card/topic-card.module';

const TAIGA_UI = [TuiLinkModule, TuiTagModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TopicCardModule,
    UrlPipeModule,
    ...TAIGA_UI,
  ],
  declarations: [RightSideBarComponent, ListingsComponent, TagsComponent],
  exports: [RightSideBarComponent],
})
export class HomeRightSideBarModule {}
