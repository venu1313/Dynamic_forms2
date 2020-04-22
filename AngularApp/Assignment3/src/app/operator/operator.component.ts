import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private service:ServiceService,private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.getmenu().subscribe(data=>this.sales=data); 
   this.username = this.service.getProduct(this.route.snapshot.params["name"])
  
  }

  username=undefined;
  
  sales=[]
 
}
