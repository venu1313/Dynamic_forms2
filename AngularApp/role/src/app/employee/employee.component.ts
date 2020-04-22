import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private service:ServiceService) {}

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
  }
 
  
  sales=[]
}
