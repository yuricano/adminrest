import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { Login } from './login';
import { LoginService } from './login.service';
import { SessionService } from '../helpers/session.service';
import { Session } from "../models";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loader = false;
  user: Login;
  constructor(
    public fb: FormBuilder,
    private loginService: LoginService,
    private route: Router,
    private _cookies: CookieService,
    private _user: SessionService) {}

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  signIn(): void {
    this.toggleLoader();
    this.user = this.loginForm.value;
    this.loginService.signIn(this.user).then((session: Session) => {
      this._user.setSession(session);
      this._cookies.putObject('Dit-d', session);
      this.toggleLoader();
      switch (session.user_type) {
        case 0:
          this.route.navigate(['/dashboard']);
          break;
        case 1:
          if (session.is_only_outsourcing) {
            this.route.navigate(['/dashboard/outsourcing']);
          } else {
            this.route.navigate(['/dashboard/employees']);
          }
          break;
        case 2:
          this.route.navigate(['/dashboard/establishments']);
          break;
        default:
          this.route.navigate(['/login']);
          break;
      }
    }).catch(errors => {
      this.toggleLoader();
      if(errors) {
        for (let error of errors) {
          toastr.error(error);
        }
      }
    });
  }

  ngOnInit() {
    this.user = new Login();
  }

  toggleLoader() {
    this.loader = !this.loader;
  }
}
