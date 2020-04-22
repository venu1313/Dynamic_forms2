import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
  
  }

  
  sales=[]
}
