import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangerpageComponent } from './mangerpage/mangerpage.component';
import { OperatorComponent } from './operator/operator.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ServiceService } from './service.service';
import{HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { CompanyComponent } from './company/company.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GrnComponent } from './grn/grn.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { WorkfloweComponent } from './workflowe/workflowe.component';
import { Operator1Component } from './operator/operator1/operator1.component'

@NgModule({
  declarations: [
    AppComponent,
    MangerpageComponent,
    OperatorComponent,
    SupervisorComponent,
    LoginComponent,
    ChartComponent,
    EmployeeComponent,
    DepartmentComponent,
    CompanyComponent,
    PurchaseComponent,
    InvoiceComponent,
    GrnComponent,
    JobcardComponent,
    WorkfloweComponent,
    Operator1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
