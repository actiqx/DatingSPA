import { Resolve, Router } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from './../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userservice: UserService,
    private alertify: AlertifyService,
    private route: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userservice.getUsers().pipe(
      catchError(error => {
        this.alertify.error('Problem Retrieving Data');
        this.route.navigate(['/home']);
        return of(null);
      })
    );
  }
}
