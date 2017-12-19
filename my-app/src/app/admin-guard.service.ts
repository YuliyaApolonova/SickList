/**
 * Created by user on 27.11.17.
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    return this.checkAdmin();
  }

  // checkLogin(url: string): boolean {
  checkAdmin(): boolean {
    if (this.authService.checkAdmin()) {
      console.log('Auth guard: isAdmin = true' );
      return true;
    }
    else{
      this.router.navigate(['/home']);
      console.log('Auth guard: isAdmin = false' );
      return false;
    }
    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
  }
}
