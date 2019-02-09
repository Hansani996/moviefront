import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    userName : new FormControl(""),
    password : new FormControl("")
  });
  get UserName (){
    return this.loginForm.get("userName");
  }
  get Password (){
    return this.loginForm.get("password");
  }
  constructor(private authservice: AuthService ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.UserName.value);

    alert(this.UserName.value) 
    
    console.log(this.Password.value);

    alert(this.Password.value);

    this.authservice.login(this.UserName.value, this.Password.value);
  }
}
