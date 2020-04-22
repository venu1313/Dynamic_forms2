import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.service.getproduct().subscribe(data=>this.sales=data); 
  
  }
  
  sales=[]
}
