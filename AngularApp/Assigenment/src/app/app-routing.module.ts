import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { SalesComponent } from './sales/sales.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddmenuComponent } from './addmenu/addmenu.component';


const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
  path:'customer',
  component:CustomerComponent
},
{
  path:'addmenu',
  component:AddmenuComponent
},
{

path:'sales',
component:SalesComponent
},
{
path:'invoice',
component:InvoiceComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
