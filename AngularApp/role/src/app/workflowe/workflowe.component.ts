import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-workflowe',
  templateUrl: './workflowe.component.html',
  styleUrls: ['./workflowe.component.css']
})
export class WorkfloweComponent implements OnInit {

  constructor(private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
  
  }

  
  sales=[]
 
}
