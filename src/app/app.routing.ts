import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('./home/home.module')).HomeModule,
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
    path: 'new',
    loadChildren: async () =>
      (await import('./post/create/post-create.module')).CreatePostModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
