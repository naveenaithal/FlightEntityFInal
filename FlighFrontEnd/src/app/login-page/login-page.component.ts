import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginData:any={}

  constructor(public _router:Router,private _admin:AdminService ) { }

  ngOnInit(): void {
  }




  login() {
    console.log(this.loginData)

    // this._admin.adminLogin(this.loginData).subscribe(
    //   (res: any){
    //     console.log(res)
    //   },
    //   (err: HttpErrorResponse)=>{
    //     console.log(err)
    //   }
    // )
    if (this.loginData.user === "Customer") {
      this._router.navigate(['/customer'])
    }
    else {
      this._router.navigate(['/admin'])
    }
    
  }
}
