import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form.component';
import { CustomerRouterModule } from './customer-router.module';


@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
   CustomerRouterModule
  ]

  
})


export class CustomerModule { }
