import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from './authguard.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}
  // canActivate:[AuthgardService]
  ,{path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
