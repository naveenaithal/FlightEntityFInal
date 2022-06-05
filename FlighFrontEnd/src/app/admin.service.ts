import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  registerFlightURL = "localhost:8002/api/v1.0/flight/airline/inventory/add"
  registerAirlineURL = "localhost:8002/api/v1.0/flight/airline/register"
  adminLoginURL="localhost:8002/api/v1.0/flight/admin/login"
  constructor(private http: HttpClient) { }
  

  registerFlight(flightDetails:any) {
    return this.http.post(this.registerFlightURL,flightDetails);
  }

  registerAirline(airlineDetails: any) {
    return this.http.post(this.registerAirlineURL,airlineDetails);
  }
  adminLogin(data: any) {
 return  this.http.post(this.adminLoginURL,data)
}

}
