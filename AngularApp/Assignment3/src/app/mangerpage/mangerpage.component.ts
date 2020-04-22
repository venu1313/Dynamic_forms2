import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import * as data from './data.json';

@Component({
  selector: 'app-mangerpage',
  templateUrl: './mangerpage.component.html',
  styleUrls: ['./mangerpage.component.css']
})
export class MangerpageComponent implements OnInit {

  constructor(private service:ServiceService,
    private route: ActivatedRoute
    ) {
    }

  ngOnInit(): void { 
    this.service.getmenu().subscribe(data=>this.sales=data);
   this.id = this.service.getProduct(this.route.snapshot.params["name"])
   this.service.getdata().subscribe(data=>this.info=data); 
  
  this.Login()
  }

  id='';

  sales=[]
  info=[]
  role=''
  name=''
  menus=[]
  Login()
  {
    for(let use of this.info)
    {
      if(this.id===use.id)
      {
        
        this.role=use.role;
        this.name=use.name;
        if(use.role== 'Manger' )
        {
          for(let ver of this.sales)
          {
             this.menus.push(ver.item1)
          }
        }
         else if(use.role== 'Operator')
         {
          for(let ver of this.sales)
           {
               
              this.menus.push(ver.item2)
           }
         }
           else
           {
            for(let ver of this.sales)
            {
               this.menus.push(ver.item3)
            }
           }
           break;
         }    
        
       
      }
      
    }
  
 
}
