import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../shared/ui/layout/layout.module';
import { HomeRoutingModule } from './home.routing';
import { HomeMainViewModule } from 'src/app/home/main-view/main-view.module';
import { HomeRightSideBarModule } from 'src/app/home/right-side-bar/right-side-bar.module';
import { LeftSideBarModule } from 'src/app/shared/ui/layout/left-side-bar/left-side-bar.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    HomeMainViewModule,
    HomeRightSideBarModule,
    LeftSideBarModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
