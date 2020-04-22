import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-procdect',
  templateUrl: './procdect.component.html',
  styleUrls: ['./procdect.component.css']
})
export class ProcdectComponent implements OnInit {

  constructor(
      private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts()
  }
  products = [
    
  ]

  showImages = false;

  toggleImages() {
    this.showImages = !this.showImages;
  }
}

