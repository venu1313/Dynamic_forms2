import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private service:ServiceService) { }
  ngOnInit():void {
    this.log=this.service.log;
    
  }
   log=""
   env=environment
   
}
