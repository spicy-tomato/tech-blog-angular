import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LetModule } from '@ngrx/component';
import { TuiEditorModule, TuiEditorSocketModule } from '@taiga-ui/addon-editor';
import {
  TuiButtonModule,
  TuiHintModule,
  TuiScrollbarModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputTagModule,
  TuiTabsModule,
  TuiTagModule,
} from '@taiga-ui/kit';
import { AutosizeModule } from 'ngx-autosize';
import { LocalImageUrlPipeModule } from 'src/core/pipes/local-image-url/local-image-url.module';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from './create-post.routing';
import { CreatePostStore } from './create-post.store';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const NGRX = [LetModule];
const TAIGA_UI = [
  TuiButtonModule,
  TuiDataListWrapperModule,
  TuiEditorModule,
  TuiEditorSocketModule,
  TuiHintModule,
  TuiInputTagModule,
  TuiScrollbarModule,
  TuiTabsModule,
  TuiTagModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreatePostRoutingModule,
    AutosizeModule,
    LocalImageUrlPipeModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [
    CreatePostComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent,
  ],
  providers: [CreatePostStore],
})
export class CreatePostModule {}
