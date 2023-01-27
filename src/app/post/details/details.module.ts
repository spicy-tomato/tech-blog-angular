import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiHintModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiTagModule } from '@taiga-ui/kit';
import { PostDetailsComponent } from './details.component';
import { PostDetailsRoutingModule } from './details.routing';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainComponent } from './main/main.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { BodyComponent } from './main/body/body.component';
import { ReadNextComponent } from './main/read-next/read-next.component';
import { LetModule } from '@ngrx/component';
import { TuiEditorSocketModule } from '@taiga-ui/addon-editor';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';

const NGRX = [LetModule];
const TAIGA_UI = [
  TuiButtonModule,
  TuiEditorSocketModule,
  TuiHintModule,
  TuiLinkModule,
  TuiTagModule,
];

@NgModule({
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    UrlPipeModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [
    PostDetailsComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    MainComponent,
    BodyComponent,
    ReadNextComponent,
  ],
})
export class PostDetailsModule {}
