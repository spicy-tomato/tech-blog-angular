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
      (await import('./sign-out/sign-out.module')).SignOutModule,
  },
  {
    path: 'login',
    loadChildren: async () =>
      (await import('./login/login.module')).LoginModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}