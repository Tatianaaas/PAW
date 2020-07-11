import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if (localStorage.getItem('user')){
        return true;
      }
     this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
     return false;
  }

}