import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent implements OnInit {

  isFirstPage:boolean=false
  isSecondPage:boolean=false
 isThirdPage:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url=="/customer/allFlights"){
      this.isFirstPage=true
    }
    else if(this.router.url=="/customer/allAirlines"){
      this.isSecondPage=true
    }   
    else if(this.router.url=="/customer/searchFlights"){
      this.isThirdPage=true
    }
  }


}
