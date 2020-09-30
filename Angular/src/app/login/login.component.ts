import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  data: any;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onlogin(){
    this.customerService.getLoginStatus(this.login).subscribe(response =>{
      console.log(response);
      if(response.status){
        localStorage.setItem('custName', response.name);
        localStorage.setItem('custId', String(response.custId));
        this.router.navigate(['dashboard']);
      }
      else this.data = response;
    });
  }
}
export class Login{

  email: string;
  password: string

}
