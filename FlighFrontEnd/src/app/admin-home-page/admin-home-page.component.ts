import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  displayStyle = "none"
  airlineRegdisplayStyle = "none"
  flightDetails:any = {}
  airlineDetails:any={}
  

  constructor(private _admin:AdminService) { }

  ngOnInit(): void {  
   
  }

  addFlightPopup() {
    this.displayStyle = "block"
    

    
  }
  registerAirline() {
    this.airlineRegdisplayStyle = "block"
    
}

  
  submitFlightDetails() {
    console.log(this.flightDetails);   
    // this._admin.registerFlight(this.flightDetails).subscribe(
    //   (res) => {
    //     console.log(res)
    //     this.displayStyle = "block"
    //   })
  }

  submitAirlinRegistrarionDetails() {
    console.log(this.airlineDetails);
    // this._admin.registerAirline(this.airlineDetails).subscribe(
    //   (res) => {  
    //     console.log(res)
        
    //     this.airlineRegdisplayStyle = "block"
    //   })
    
  }


  closeAddFlightPopup() {
    this.displayStyle = "none"
     this.airlineRegdisplayStyle="none"
    
  }





}
