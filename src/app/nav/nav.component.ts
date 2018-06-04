import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    private authservice: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}
  doLogin() {
    this.authservice.login(this.model).subscribe(
      data => {
        this.alertify.success('logged in successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
  logout() {
    this.authservice.userToken = null;
    localStorage.removeItem('token');
    this.alertify.success('loggedout successfully');
  }
  loggedIn() {
    return this.authservice.loggedIn();
  }
}
