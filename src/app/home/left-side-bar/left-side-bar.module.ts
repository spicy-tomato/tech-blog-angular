import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeftSideBarComponent } from './left-side-bar.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';
import { OtherNavigationLinksComponent } from './other-navigation-links/other-navigation-links.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

const ZORRO = [NzButtonModule, NzIconModule, NzMenuModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...ZORRO],
  declarations: [
    LeftSideBarComponent,
    LoginBoxComponent,
    NavigationLinksComponent,
    OtherNavigationLinksComponent,
    SocialMediaComponent,
    PopularTagsComponent,
  ],
  exports: [LeftSideBarComponent],
})
export class HomeLeftSideBarModule {}
