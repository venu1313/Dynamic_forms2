import { Component, OnInit } from '@angular/core';
import * as data from './data.json';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.data()
  }


  chartOptions = {
    responsive: true    
  }
labels=[]
data()
{ 
for (let index = 21; index < 32; index++) {
    this.labels.push(index);
}
for (let index = 1; index < 21; index++) {
  this.labels.push(index);
}
}

  chartData : any = (data as any).default;

  
  colors = [
    { 
      backgroundColor: 'red'
    },
    { 
      backgroundColor: 'green'
    }
  ]
  
  
}
