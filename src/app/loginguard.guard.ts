import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginguardGuard implements CanActivate {
  canActivate(): boolean {
    if(localStorage.getItem("username")===null){
      alert("login")
      return false;
    
    }
    else{return true;}
  }
}
