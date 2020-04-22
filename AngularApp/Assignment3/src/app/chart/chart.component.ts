import { Component, OnInit } from '@angular/core';
import * as data from './data.json';
import { ServiceService } from '../service.service.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data);
  
}


sales=[]


  chartOptions = {
    responsive: true    
  }
  labels =   ['Red', 'Green', 'Yellow', 'blue', 'pink'];


  chartData : any = (data as any).default;

 colors=[{
    backgroundColor: ['Red', 'Green', 'Yellow', 'blue', 'pink'],
    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
    borderWidth: 2,
  }]

 
  
}
