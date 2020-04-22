import { Component, OnInit } from '@angular/core';
import * as data from './data.json';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

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
