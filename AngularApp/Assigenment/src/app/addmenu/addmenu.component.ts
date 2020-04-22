import { Component, OnInit } from '@angular/core';
import * as menu from '../menu.json';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newTodoText = ''
  showAddItem=false
  menus : any = (menu as any).default;
  AddItem()
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
