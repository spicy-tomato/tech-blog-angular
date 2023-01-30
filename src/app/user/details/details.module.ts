import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { TuiEditorSocketModule } from '@taiga-ui/addon-editor';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { MailtoPipeModule } from 'src/app/shared/pipes/mailto-pipe/mailto-pipe.module';
import { AvatarModule } from 'src/app/shared/ui/components/avatar/avatar.module';
import { PostCardModule } from 'src/app/shared/ui/components/post-card/post-card.module';
import { TopicCardModule } from 'src/app/shared/ui/components/topic-card/topic-card.module';
import { UserDetailsComponent } from './details.component';
import { UserDetailsRoutingModule } from './details.routing';
import { UserDetailsInfoComponent } from './info/info.component';
import { UserDetailsProfileComponent } from './profile/profile.component';
import { UserDetailsSubStoriesComponent } from './sub-stories/sub-stories.component';

const NGRX = [LetModule];
const TAIGA_UI = [TuiButtonModule, TuiEditorSocketModule, TuiLinkModule];

@NgModule({
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    AvatarModule,
    PostCardModule,
    TopicCardModule,
    MailtoPipeModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [
    UserDetailsComponent,
    UserDetailsProfileComponent,
    UserDetailsInfoComponent,
    UserDetailsSubStoriesComponent,
  ],
})
export class UserDetailsModule {}
