import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private service:ServiceService,private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
   this.username = this.service.getProduct(this.route.snapshot.params["name"])
  
  }

  username=undefined;
  
  sales=[]
}
