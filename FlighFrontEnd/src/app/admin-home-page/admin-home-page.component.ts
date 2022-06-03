import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  displayStyle = "none"
  airlineRegdisplayStyle = "none"
  

  constructor() { }

  ngOnInit(): void {
   
  }

  addFlightPopup() {
    this.displayStyle = "block"

    
  }
  registerAirline() {
    this.airlineRegdisplayStyle="block"
}



  closeAddFlightPopup() {
    this.displayStyle = "none"
     this.airlineRegdisplayStyle="none"
    
  }

}
