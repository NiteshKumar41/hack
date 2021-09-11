import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthgardService implements CanActivate {
 
  constructor( private router: Router, private localStorageService: LocalStorageService) { }
  canActivate():boolean
  {
    const user= this.localStorageService.getItem('userprofile')
    if(!user)
    {
      this.router.navigateByUrl('/login');
    }
    return !!user?false : true
  }
}
