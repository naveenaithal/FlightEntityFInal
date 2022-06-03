import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';





const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: "admin", component: AdminHomePageComponent },
  {
    path: "customer", component: NavBarComponent, children: [
      {path:"allFlights",component:CustomerHomePageComponent},
      {path:"allAirlines",component:CustomerHomePageComponent},
      {path:"searchFlights",component:CustomerHomePageComponent},
      {path:"bookTicket",component:CustomerHomePageComponent},
      {path:"getTicketDetails",component:CustomerHomePageComponent},
      {path:"bookingHistory",component:CustomerHomePageComponent},
      {path:"cancelTicket",component:CustomerHomePageComponent}
]}
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
