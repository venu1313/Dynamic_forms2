import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as productItem from'./productItem.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private var1:DataService) { }

  ngOnInit(): void {
    this.var2=this.var1.var;
  }
  var2=false
  products:any = (productItem as any).default;
}
