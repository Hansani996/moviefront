import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRouterModule } from './navbar-layout-router.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRouterModule
  ]
})
export class NavBarLayoutModule { }
