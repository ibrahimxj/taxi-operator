import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsComponent } from './components/cabs/cabs.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component: LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'cabs',component:CabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
