import { UserInfoService } from './../services/user-info.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userInfo: UserInfoService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = !!this.userInfo.getToken();
    if (isAuthenticated) {
      return true;
    }
    this.router.navigate(['welcome']);
    return false;
  }
}
