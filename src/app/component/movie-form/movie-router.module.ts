import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent} from './movie-form.component';


const routes: Routes = [
  {
    path : "",
    component : MovieFormComponent,
    children:[
        {
          path:'movie',
          loadChildren:"src/app/component/movie-form/movie.module#MovieModule"
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports : [RouterModule]
})
export class MovieRouterModule { }
