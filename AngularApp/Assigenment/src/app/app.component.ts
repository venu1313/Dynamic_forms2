import { Component } from '@angular/core';

import * as menu from './menu.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMenuItem=false
  
  show()
  {

    this.showMenuItem=!this.showMenuItem
  }
  
  menus : any = (menu as any).default;
  newTodoText = ''
  showAddItem=false

  AddItem1()
  {
    this.showAddItem=!this.showAddItem
  }
  
  AddMenuItem(){
  
  if (this.newTodoText === '') {
    return;
  }
  this.menus.push({
    path: this.newTodoText,
    menuItem:this.newTodoText

  });
  this.newTodoText = '';
  this.showAddItem=!this.showAddItem

  }

  }

