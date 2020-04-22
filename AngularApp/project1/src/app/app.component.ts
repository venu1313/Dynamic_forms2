import { Component} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector:'app-root',
template:`  
  <input [(ngModel)]='color' class="form-control"/>
  <input type='color' [(ngModel)]='color' />
  <div [ngSwitch]='color'>

  <div *ngSwitchCase="'red'">
  <h2 class='text-danger'>{{name}}</h2>
  </div>
  
  <div *ngSwitchCase="'blue'">
  <h2 class='text-primary'>{{name}}</h2>
  </div>
  
  <div *ngSwitchCase="'green'">
  <h2 class='text-success'>{{name}}</h2>
  </div>
  <div *ngSwitchDefault='' >
  <h2 *ngIf="color!==''"class='text-info'>"{{color}}" : is not a color</h2>
  </div>

  <div *ngIf="color; else notShow">
  <h2  [style.color]='color'>{{name}}</h2>
 </div>
 
 <ng-template #notShow>
  <h2>
    Show this only if else Block
  </h2>
</ng-template>
  </div>
  
  <ul *ngFor="let collection of industryType">
      <li>{{ collection.type }}</li>
      <ul>
        <li *ngFor="let hollywood of collection.movies">
          {{ hollywood.name }}
        </li>
      </ul>
    </ul> 

    <div *ngFor='let i of num;let j=index '>
    <h1>{{j+1}}</h1>
    </div>
    <app-emp></app-emp>
  `,
  styles:[`h1{color:red}
.text-success
{
  color:green
}
  `]
})

export class AppComponent 
{
  username='venu'
name='Angular from Google For Web and Mobile Apps'
isDisabled=false
color=''
num=new Array(10);
industryType: any[] = [
  {'type': 'Bollywood','movies': [
      {
        "name": "Gully Boy"
      },
      {
        "name": "Manikarnika"
      },
      {
        "name": "Kalank"
      }        
    ]
  },
  {
    'type': 'Hollywood',
    'movies': [
      {"name": "Avengers: Endgame" },
      {"name": "Good Boys"},
      {"name": "Playmobil" },
      { "name": "Aquarela"}        
    ]
  }
];
}
