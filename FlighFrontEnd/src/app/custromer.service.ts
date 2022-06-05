import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class CustromerService {
  getAllFlightsURL = "localhost:8002/api/v1.0/flight/all"
  getAllAirlinesURL = "localhost:8002/api/v1.0/flight/airline"
  activeAirlineURL = "localhost:8002/api/v1.0/flight/search"
  bookTicketsURL = "localhost:8002/api/v1.0/flight/booking"
  ticketDetailsURL = "localhost:8002/api/v1.0/flight/ticket"
  bookingHistoryURL = "localhost:8002/api/v1.0/flight/booking/history"
  cancelTicketURL="localhost:8002/api/v1.0/flight/booking/cancel"

  
  constructor(private http: HttpClient) { }
  


  getAllFlights() {
    return this.http.get(this.getAllFlightsURL);
  }
  getAllAirlines() {
   return  this.http.get(this.getAllAirlinesURL)
    
  }
  allActiveAirlines() {
    return this.http.post(this.activeAirlineURL,{})
  }

  bookTicket(ticketData: any) {
    // console.log(ticketData.Fid)
    return this.http.post(`${this.bookTicketsURL}/${ticketData.Fid}`,ticketData)
  }

  getTicketDetails(ticketId:any){
    return this.http.get(`${this.ticketDetailsURL}/${ticketId}`)
  }
  bookingHistory(userEmail: any) {
    return this.http.post(`${this.bookingHistoryURL}/${userEmail}`,{})
  }




  cancelTicket(pnr:any) {
   return this.http.delete(`${this.cancelTicketURL}/${pnr}`)
  }
}
