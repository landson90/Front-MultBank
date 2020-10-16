import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/service/user/user.service';

@Injectable({providedIn: 'root'})
export class LonginGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
    )
    {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userService.isLogin()) {
      this.router.navigate(['home'])
      return false;
    }


    return true;
  }
}
