import { Component, OnInit } from '@angular/core';
import * as data1 from './data1.json';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customer: any = (data1 as any).default;
}
