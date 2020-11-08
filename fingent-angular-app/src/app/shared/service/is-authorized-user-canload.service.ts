import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthorizedUserCanloadService implements CanLoad {

  constructor(private _router: Router) {  }

  canLoad(route : Route): boolean {
    console.log(route);
    if(route.path == 'auth' || route.path == 'user')  return true;
  }
}
