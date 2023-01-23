import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiTagModule } from '@taiga-ui/kit';
import { PostDetailsComponent } from './details.component';
import { PostDetailsRoutingModule } from './details.routing';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainComponent } from './main/main.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

const TAIGA_UI = [TuiTagModule];

@NgModule({
  imports: [CommonModule, PostDetailsRoutingModule, ...TAIGA_UI],
  declarations: [
    PostDetailsComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    MainComponent,
  ],
})
export class PostDetailsModule {}
