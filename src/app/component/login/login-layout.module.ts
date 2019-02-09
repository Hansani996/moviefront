import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouterModule } from './login-layout-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    declarations:[LoginComponent],
    imports:[
        CommonModule,
        LoginRouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class LoginLayoutModule{}