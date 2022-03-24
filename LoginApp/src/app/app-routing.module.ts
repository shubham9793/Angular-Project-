import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [


  //Home Page Router path decleration
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'

  },
  //Login    Page Router path decleration
  {
    path:"login",
    component: LoginComponent,
    pathMatch:'full'
  },

  //DashBoard Page Router path decleration
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
