import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthgardService implements CanActivate {
 
  constructor( private router: Router) { }
  canActivate():boolean
  {
    const user= localStorage.getItem('userprofile')
    if(!user)
    {
      this.router.navigateByUrl('/login');
    }
    return !!user?true : false
  }
}
