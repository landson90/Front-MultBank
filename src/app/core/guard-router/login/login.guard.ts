import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserClient } from 'src/app/models/user-client';

@Injectable({providedIn: 'root'})
export class LonginGuard implements CanActivate {

  userClient: UserClient;
  constructor(
    private router: Router)
    {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {



    return true;
  }
}
