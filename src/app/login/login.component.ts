import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  username: string;
  password: string;
  userIdentify: boolean;

  ngOnInit() {
    this.data.setStatus(this.userIdentify);
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["dashboard"]);
      this.data.setStatus(this.userIdentify = true);
    }
    else if(this.username == 'user' && this.password == 'user'){
      this.router.navigate(["dashboard"]);
      this.data.setStatus(this.userIdentify = false);
    }
    else {
      alert("Invalid credentials");
    }
  }
}
