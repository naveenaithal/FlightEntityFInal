import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustromerService } from '../custromer.service';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent implements OnInit {
bookingDetails:any={}
  isFirstPage:boolean=false
  isSecondPage:boolean=false
  isThirdPage: boolean = false
  isFourthPage: boolean = false  
  isFifthPage: boolean = false
  isSixthPage: boolean = false
  isSeventhPage: boolean = false
  dataSource: any
  dataSource2: any
  dataSource3: any
  pnrNumber: any
  emailAdress:any
  isTicket: boolean = true
  users:any={}
 
  constructor(private router:Router,private _customer:CustromerService) { }
 displayedColumns: string[] = ['flightId', 'flightNumber', 'airlineName', 'fromPlace','toPlace','startDate','endDate','scheduledDays'];
  displayedColumns2: string[] = ['airlineId', 'airlineName', 'contactNumber', 'address', 'status'];
  displayedColumns3: string[] = ['pnr', 'flightId', 'bookedSeats', 'name', 'email','gender','age','meal','seatNumbers'];
  

  ngOnInit(): void {
    this.dataSource = this.flights
    this.dataSource2 = this.airlines
    console.log(this.router.url)
    if(this.router.url=="/customer/allFlights"){
      this.isFirstPage=true
    }
    else if(this.router.url=="/customer/allAirlines"){
      this.isSecondPage=true
    }   
    else if(this.router.url=="/customer/searchFlights"){
     this.isFirstPage=true
    }
    else if(this.router.url=="/customer/bookTicket"){
      this.isFourthPage=true
    }
    else if(this.router.url=="/customer/getTicketDetails"){
      this.isFifthPage=true
    }
    else if(this.router.url=="/customer/bookingHistory"){
      this.isSixthPage=true
    }
    else if(this.router.url=="/customer/cancelTicket"){
      this.isSeventhPage=true
    }

  }

  searchTicket() {
    this._customer.getTicketDetails(this.pnrNumber).subscribe(
      (res: any) => {
        console.log(res)
        this.users= res
        this.isTicket=true
      }
    )
  }
  bookFlight() {
    
    // this._customer.bookTicket(this.bookingDetails).subscribe(
    //   (res: any) => {
    //     console.log(res)
    //     alert("booked successfully")
    //     this.router.navigate(['/customer/getTicketDetails'])
    //   }
    // )
  
  }
  
  getAllFlights() {
    this._customer.getAllFlights().subscribe(
      (res) => {
        console.log(res)
        
        // res=this.dataSource
      }
    )
  
}
  getAllAirlines() {
    this._customer.getAllAirlines().subscribe(
      (res) => {
        console.log(res)
        
        // res=this.dataSource
      }
    )
  
}

  allActiveAirlines() {
    this._customer.allActiveAirlines().subscribe(
      (res) => {
        console.log(res)
        // this.dataSource2=res
      }
    )
  }
   

  ticketHistory() {
    this._customer.bookingHistory(this.emailAdress).subscribe(
      (res) => {
        console.log(res)
      } )
  }


  deleteTicket() {
    this._customer.cancelTicket(this.pnrNumber).subscribe(
      (res) => {
        console.log(res)
        alert("Ticket cancelled successfully")
      } )
  }
   

  // users = [
  //   { "pnr":10004,"flightId":232,"bookedSeats": 1, "name": "Mary",  "email": "mary@gmail.com", "gender": "FEMALE",  "age": 28,
  //   "meal": "NONVEG",   "seatNumbers": "253"},
 
  // ]

  

 airlines=[
    {
        "airlineId": "1",
        "airlineName": "Indigo",
        "logoURL": "http://google.com",
        "contactNumber": "008885555",
        "address": "bangalore",
        "status": "ACTIVE"
    },
    {
        "airlineId": "22",
        "airlineName": "KingFisher",
        "logoURL": "hhh",
        "contactNumber": "055656",
        "address": "vijaj",
        "status": "ACTIVE"
    },
    {
        "airlineId": "23",
        "airlineName": "Qatar",
        "logoURL": "hhh",
        "contactNumber": "576230",
        "address": "Bangalore",
        "status": "ACTIVE"
    },
    {
        "airlineId": "24",
        "airlineName": "Vistara",
        "logoURL": "yyy",
        "contactNumber": "456765",
        "address": "Delhi",
        "status": "ACTIVE"
    },
    {
        "airlineId": "25",
        "airlineName": "Tata",
        "logoURL": "example",
        "contactNumber": "3456",
        "address": "Maharastre",
        "status": "ACTIVE"
    }
]


  flights= [
    {
        "flightId": 100,
        "flightNumber": 1000,
        "airlineName": "Indigo",
        "fromPlace": "Bengaluru",
        "toPlace": "Mumbai",
        "startDate": "2020-05-18",
        "endDate": "2020-05-22",
        "scheduledDays": [
            "MONDAY"
        ],
        "instrument": "A320neo",
        "businessClassSeats": 150,
        "nonBusinessClassSeats": 500,
        "ticketCost": 5000.0,
        "rows": 40,
        "meal": "NONVEG"
    },
    {
        "flightId": 101,
        "flightNumber": 1013,
        "airlineName": "Indigo",
        "fromPlace": "Mysore",
        "toPlace": "kolkata",
        "startDate": "2020-05-18",
        "endDate": "2020-05-22",
        "scheduledDays": [
            "TUESDAY"
        ],
        "instrument": "A320neo",
        "businessClassSeats": 150,
        "nonBusinessClassSeats": 500,
        "ticketCost": 5000.0,
        "rows": 40,
        "meal": "NONVEG"
    },
    {
        "flightId": 102,
        "flightNumber": 1013,
        "airlineName": "Kingfisher",
        "fromPlace": "Mysore",
        "toPlace": "kolkata",
        "startDate": "2020-05-18",
        "endDate": "2020-05-22",
        "scheduledDays": [
            "TUESDAY"
        ],
        "instrument": "A320neo",
        "businessClassSeats": 150,
        "nonBusinessClassSeats": 500,
        "ticketCost": 5000.0,
        "rows": 40,
        "meal": "NONVEG"
    },
    {
        "flightId": 103,
        "flightNumber": 1015,
        "airlineName": "Vistara",
        "fromPlace": "Delhi",
        "toPlace": "Barcelona",
        "startDate": "2020-06-24",
        "endDate": "2020-06-25",
        "scheduledDays": [
            "WEDNESDAY"
        ],
        "instrument": "A320",
        "businessClassSeats": 160,
        "nonBusinessClassSeats": 300,
        "ticketCost": 50000.0,
        "rows": 60,
        "meal": "NONVEG"
    },
    {
        "flightId": 104,
        "flightNumber": 2345,
        "airlineName": "Tata",
        "fromPlace": "Maharastra",
        "toPlace": "Delhi",
        "startDate": "2020-06-27",
        "endDate": "2020-06-28",
        "scheduledDays": [
            "THURSDAY"
        ],
        "instrument": "A320",
        "businessClassSeats": 140,
        "nonBusinessClassSeats": 100,
        "ticketCost": 4000.0,
        "rows": 70,
        "meal": "VEG"
    }
]

}
