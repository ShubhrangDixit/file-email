import { Component, OnInit } from '@angular/core';

import {CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  data: any;
 
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    alert(JSON.stringify(this.customer));
    this.customerService.checkStatus(this.customer).subscribe(status =>{
      this.data = status;
    })
  }

}

export class Customer{
  id: number;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}


// export class Address{
//   city: string;
//   pincode: number;
// }