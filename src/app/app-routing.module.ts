import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-service/auth.guard';

const routes: Routes = [
  {
    path : "navbar",
    loadChildren : "src/app/component/navbar/navbar-layout.module#NavBarLayoutModule",
    canActivate: [AuthGuard]
  },
  {
    path : "login",
    loadChildren : "src/app/component/login/login-layout.module#LoginLayoutModule"
  },
  { path: '',
    redirectTo: '/navbar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
