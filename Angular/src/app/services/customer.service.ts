import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.component';
import {Login } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  checkStatus(customer: Customer): Observable<any>{
    let url = "http://localhost:8181/register";
    return this.http.post(url, customer);

  }

  getLoginStatus(login: Login): Observable<any>{
    let url = "http://localhost:8181/login";
    return this.http.post(url,login);
  }

  uploadPic(formData: FormData): Observable<any>{
    let url = "http://localhost:8181/pic-upload";
    return this.http.post(url, formData);
  }

  loadProfile(customerId: number): Observable<any>{
    let url = "http://localhost:8181/profile?custId="+customerId;
    return this.http.get(url);
  }
}
