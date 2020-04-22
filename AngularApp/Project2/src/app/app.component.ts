import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer=[
    { id:1,Name:"venu",price:788 },
    { id:2,Name:"gopal",price:858 },
    { id:3,Name:"yugf",price:8765 },
    { id:4,Name:"oikj",price:4567 },
    { id:5,Name:"igdj",price:9097 }
  ]
}
