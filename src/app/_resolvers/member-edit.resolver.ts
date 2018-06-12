import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../_models/User';
import { Injectable } from '@angular/core';
import { UserService } from './../_services/user.service';
import { AlertifyService } from './../_services/alertify.service';
import { Observable, empty, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService
      .getUser(this.authService.decodedToken.nameid)

      .pipe(
        catchError(error => {
          this.alertify.error('Problem Retrieving Data');
          this.router.navigate(['/members']);
          return of(null);
        })
      );
  }
}
