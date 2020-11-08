import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

import { IsAuthorizedUserCanloadService } from './shared/service/is-authorized-user-canload.service';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canLoad: [IsAuthorizedUserCanloadService]},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canLoad: [IsAuthorizedUserCanloadService] },
  { path: '',   redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
