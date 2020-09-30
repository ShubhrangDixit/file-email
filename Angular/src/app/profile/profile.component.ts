import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer.component';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerId;
  data: Customer;

  constructor(private customerService: CustomerService ) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('custId');
    this.customerService.loadProfile(this.customerId).subscribe(response =>{
      this.data = response;
    })
  }



}
