import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { OperatorComponent } from './operator/operator.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyComponent } from './company/company.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { WorkfloweComponent } from './workflowe/workflowe.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GrnComponent } from './grn/grn.component';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { Role } from './_models';
import { AuthGuard } from './_helpers';
import { Login1Component } from './login1';

// import { AuthGuard } from './_helpers';


const routes: Routes = [
  {
  path:" ",
    component:LoginComponent
  },
  {
    
    canActivate: [AuthGuard],
    path: 'Manger/:name', component: ManagerComponent, 
  children: [
  //     { path: 'Dashboard/:name', component: ChartComponent},
      { path: "Employee/:name", canActivate: [AuthGuard],component:EmployeeComponent},
    { path:"Company/:name", canActivate: [AuthGuard],component:CompanyComponent},
    { path:"Department/:name",canActivate: [AuthGuard],component:DepartmentComponent},
    
    
  
  ]
},

  {
    path:"Operator/:name",
    component:OperatorComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:"Job Card/:name",
        canActivate: [AuthGuard],
        component:JobcardComponent
      },
      {
        path:"Work Flow/:name",
        canActivate: [AuthGuard],
        component:WorkfloweComponent
      }
      
    ]
  },

  {
    path:"Supervisor/:name",
    component:SupervisorComponent,
    canActivate: [AuthGuard],
    children: [ 
     
    {
      path:"Purchase Order/:name",
      canActivate: [AuthGuard],
      component:PurchaseComponent
    },
    {
      path:"Invoice/:name",
      canActivate: [AuthGuard],
      component:InvoiceComponent
    },
    {
      path:"Goods Receipt Number/:name",
      canActivate: [AuthGuard],
      component:GrnComponent
    }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
},
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{
    path: 'login',
    component: Login1Component
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
