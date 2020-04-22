import { Component, OnInit } from '@angular/core';
import * as detiails from'./detiails.json';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  invoice:any=(detiails as any).default;
  
}
