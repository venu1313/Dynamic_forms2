import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  constructor(private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
  
  }

  sales=[]
}
