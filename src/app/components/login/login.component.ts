import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthgardService } from 'src/app/authguard.service';
import { DataService } from 'src/app/data.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userprofile:any
  localItem: string;

  constructor( private dataservice:DataService, private router:Router, private localStorageService: LocalStorageService) {
   
   }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data);  
    // const url=""
    this.dataservice.getData(data).subscribe((data)=>{
      console.log(data);
      // this.userprofile = data
      // console.log(this.userprofile);
      // this.userprofile.push(data);
      // localStorage.setItem("userprofile",JSON.stringify(this.userprofile));
     
      // localStorage.setItem('userprofile', 'data')
      this.localStorageService.setItem(this.userprofile,  JSON.stringify(data));
      this.router.navigateByUrl('/home');
  
      
    })
  }
  
}
