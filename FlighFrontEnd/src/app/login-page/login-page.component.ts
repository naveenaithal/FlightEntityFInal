import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginData:any={}

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }




  login() {
    console.log(this.loginData)
    if (this.loginData.user === "Customer") {
      this._router.navigate(['/customer'])
    }
    else {
      this._router.navigate(['/admin'])
    }
    
  }
}
