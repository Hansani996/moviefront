import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form.component';
import { MovieRouterModule } from './movie-router.module';


@NgModule({
  declarations: [MovieFormComponent],
  imports: [
    CommonModule,
    MovieRouterModule
  ]
})
export class MovieModule { }
