import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children:[
    {
      path:'customer',
      loadChildren:"src/app/component/movie-form/movie.module#MovieModule"
  }
]
  }
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NavbarRouterModule { }
