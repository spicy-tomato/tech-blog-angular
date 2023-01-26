import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeMainViewModule } from 'src/app/home/main-view/main-view.module';
import { HomeRightSideBarModule } from 'src/app/home/right-side-bar/right-side-bar.module';
import { LeftSideBarModule } from 'src/app/shared/ui/layout/left-side-bar/left-side-bar.module';
import { LayoutModule } from '../shared/ui/layout/layout.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

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
