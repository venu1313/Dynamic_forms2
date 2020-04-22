import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcdectComponent } from './procdect/procdect.component';
import {TodoComponent} from './todo/todo.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
  path:'product',
  component:ProcdectComponent
},
  {
    path: 'product/:id',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
