import { Component, OnInit } from '@angular/core';
import * as salesDetiails from'./salesDetiails.json';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sales:any=(salesDetiails as any).default;
}
