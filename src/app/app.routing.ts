import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule,
      },
      {
        path: 'sign-out',
        loadChildren: async () =>
          (await import('./user/sign-out/sign-out.module')).SignOutModule,
      },
      {
        path: 'login',
        loadChildren: async () =>
          (await import('./user/login/login.module')).LoginModule,
      },
      {
        path: 'register',
        loadChildren: async () =>
          (await import('./user/register/register.module')).RegisterModule,
      },
      {
        path: 'u/:userName',
        loadChildren: async () =>
          (await import('./user/details/details.module')).UserDetailsModule,
        data: { padding: false },
      },
      {
        path: 'u/:userName/:postId',
        loadChildren: async () =>
          (await import('./post/details/details.module')).PostDetailsModule,
      },
    ],
  },
  {
    path: 'new',
    loadChildren: async () =>
      (await import('./post/create/create.module')).CreatePostModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
