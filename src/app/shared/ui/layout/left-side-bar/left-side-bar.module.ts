import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { UrlPipeModule } from 'src/app/shared/pipes/url/url-pipe.module';
import { LoginBoxComponent } from 'src/app/shared/ui/layout/left-side-bar/login-box/login-box.component';
import { MyTagsComponent } from 'src/app/shared/ui/layout/left-side-bar/my-tags/my-tags.component';
import { NavigationLinksComponent } from 'src/app/shared/ui/layout/left-side-bar/navigation-links/navigation-links.component';
import { OtherNavigationLinksComponent } from 'src/app/shared/ui/layout/left-side-bar/other-navigation-links/other-navigation-links.component';
import { SocialMediaComponent } from 'src/app/shared/ui/layout/left-side-bar/social-media/social-media.component';
import { CloseMobileSidebarComponent } from './close-mobile-sidebar/close-mobile-sidebar.component';
import { LeftSideBarComponent } from './left-side-bar.component';

const NGRX = [LetModule];
const TAIGA_UI = [TuiButtonModule, TuiScrollbarModule];

@NgModule({
  imports: [CommonModule, RouterModule, UrlPipeModule, ...NGRX, ...TAIGA_UI],
  declarations: [
    LeftSideBarComponent,
    LoginBoxComponent,
    NavigationLinksComponent,
    OtherNavigationLinksComponent,
    SocialMediaComponent,
    MyTagsComponent,
    CloseMobileSidebarComponent,
  ],
  exports: [LeftSideBarComponent],
})
export class LeftSideBarModule {}
