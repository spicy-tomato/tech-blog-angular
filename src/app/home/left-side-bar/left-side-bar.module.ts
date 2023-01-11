import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftSideBarComponent } from './left-side-bar.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';
import { OtherNavigationLinksComponent } from './other-navigation-links/other-navigation-links.component';
import { MyTagsComponent } from './my-tags/my-tags.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';

const TAIGA_UI = [TuiButtonModule, TuiScrollbarModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...TAIGA_UI],
  declarations: [
    LeftSideBarComponent,
    LoginBoxComponent,
    NavigationLinksComponent,
    OtherNavigationLinksComponent,
    SocialMediaComponent,
    MyTagsComponent,
  ],
  exports: [LeftSideBarComponent],
})
export class HomeLeftSideBarModule {}
