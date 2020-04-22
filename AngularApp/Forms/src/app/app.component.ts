import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-root',
//   template: `
//   Favorite Color: <input type="text"  [formControl]=" favorite">
//   <button (click)='valu()'> value</button>
//   <h1 class="text-primary">{{name}}</h1>
// `,
templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  favorite = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  name=''
  valu(){
  this.name=this.favorite.value
  }
  flag=false
  username=''
  password=''
  role=''
  Login()
  {
      if(this.username===this.password )
      {
        this.flag=false
        this.role='#'
        
       // this.router.navigate(['/Mangerpage']);
      }
      else
      this.flag=true
   
  }
}
