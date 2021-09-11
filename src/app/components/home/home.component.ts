import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  getData() {
   
  //  const token = localStorage.getItem('userprofile');
  // let token = this.localStorageService.getItem('userprofile');
  var currentUser = JSON.parse(localStorage.getItem('userprofile'));
  
    console.log(currentUser);
 }

removeData(){
  //  alert('h');
  this.localStorageService.clear();
  this.router.navigateByUrl('/login');
  
 }
}
