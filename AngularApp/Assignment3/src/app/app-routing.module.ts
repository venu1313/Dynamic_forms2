import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangerpageComponent } from './mangerpage/mangerpage.component';
import { OperatorComponent } from './operator/operator.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyComponent } from './company/company.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GrnComponent } from './grn/grn.component';
import { WorkfloweComponent } from './workflowe/workflowe.component';
import { JobcardComponent } from './jobcard/jobcard.component';



 export const routes: Routes = [
 //
{
  
    path:"",
    component:LoginComponent
  },
  {
  path: 'Manger/:name', component: MangerpageComponent,
  children: [
      { path: 'Dashboard/:name', component: ChartComponent},
      { path: "Employee/:name", component:EmployeeComponent},
    { path:"Company/:name", component:CompanyComponent},
    { path:"Department/:name",component:DepartmentComponent},
    
    
  
  ]
},

  {
    path:"Operator/:name",
    component:OperatorComponent,
    canActivateChild: [],
    children: [
      {
        path:"Job Card/:name",
        component:JobcardComponent
      },
      {
        path:"Work Flow/:name",
        component:WorkfloweComponent
      }
      
    ]
  },

  {
    path:"Supervisor/:name",
    component:SupervisorComponent,
    children: [ 
     
    {
      path:"Purchase Order/:name",
      component:PurchaseComponent
    },
    {
      path:"Invoice/:name",
      component:InvoiceComponent
    },
    {
      path:"Goods Receipt Number/:name",
      component:GrnComponent
    }
    ]
  },
  
  
 
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: true} )
        
       
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
