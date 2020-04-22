import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getproduct().subscribe(data=>this.sales=data); 

  }
  sales=[]
}
