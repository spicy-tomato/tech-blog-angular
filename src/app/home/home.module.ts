import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../shared/ui/layout/layout.module';
import { HomeRoutingModule } from './home.routing';
import { HomeLeftSideBarModule } from 'src/app/home/left-side-bar/left-side-bar.module';
import { HomeMainViewModule } from 'src/app/home/main-view/main-view.module';
import { HomeRightSideBarModule } from 'src/app/home/right-side-bar/right-side-bar.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    HomeLeftSideBarModule,
    HomeMainViewModule,
    HomeRightSideBarModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
