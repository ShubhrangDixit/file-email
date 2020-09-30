import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  custName = localStorage.getItem('custName');
  custId = localStorage.getItem('custId');

  constructor() { }

  ngOnInit(): void {
  }

}
