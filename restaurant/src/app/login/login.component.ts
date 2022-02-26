import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User;

  constructor(private userService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.userService.login(this.user).subscribe(data => {
      alert("Login Successfully")
      console.log(data);
      this.cleanUser();
    }, error =>alert("Sorry please enter corret user and password"))
  }

  cleanUser(){
    this.user.name_user = "";
    this.user.pass_user = "";
  }

}
