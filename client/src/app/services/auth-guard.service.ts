import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userUservice: UserService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   if (this.userUservice.isLogin) {
     return true;
   }
   this.route.navigate(['/admin/login'], {queryParams: {returnUrl: state.url}});
   return false;
  }

}
