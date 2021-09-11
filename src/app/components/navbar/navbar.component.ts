import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
selectedTab='login'
  constructor() { }

  ngOnInit(): void {
  }
  setActive(tabname){
    console.log(tabname);
    this.selectedTab = tabname;
    
  }
  getTabNav(tabname){
    if(tabname === this.selectedTab)
    {
      return 'active';
    }
    else
    {
      return '';
    }
  }
}
