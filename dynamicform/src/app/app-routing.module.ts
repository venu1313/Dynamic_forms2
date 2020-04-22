import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { DeshbordComponent } from './deshbord/deshbord.component';


const routes: Routes = [
  {
  path: '', component:HomeComponent,
  children: [
      { path: 'Admin', component:AdminComponent },
      { path: "Employee", component:EmployeeComponent},
      {path: 'Form', component:Form1Component},
      {path: 'Home', component:DeshbordComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
