import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { OperatorComponent } from './operator/operator.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { ServiceService } from './services/service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WorkfloweComponent } from './workflowe/workflowe.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { GrnComponent } from './grn/grn.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Operator1Component } from './operator/operator1/operator1.component';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import {  Login1Component } from './login1';
// import { HelperComponent } from './helper/helper.component';
// import { HelpComponent } from './helper/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    OperatorComponent,
    SupervisorComponent,
    LoginComponent,
   // ChartComponent,
    EmployeeComponent,
    DepartmentComponent,
    CompanyComponent,
    PurchaseComponent,
    InvoiceComponent,
    GrnComponent,
    JobcardComponent,
    WorkfloweComponent,
    Operator1Component,
    HomeComponent,
        AdminComponent,
        Login1Component
    // HelperComponent,
    // HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
