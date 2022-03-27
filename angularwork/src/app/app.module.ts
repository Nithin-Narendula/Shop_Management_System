import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EmployeeService } from './employee.service';

import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DesignationComponent } from './designation/designation.component';
import { ShowDesgComponent } from './designation/show-desg/show-desg.component';
import { AddDesgComponent } from './designation/add-desg/add-desg.component';
import { EditDesgComponent } from './designation/edit-desg/edit-desg.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { EditCustComponent } from './customer/edit-cust/edit-cust.component';
import { DesignationService } from './designation.service';
import { CustomerService } from './customer.service';
import { CustledgComponent } from './custledg/custledg.component';
import { ShowClComponent } from './custledg/show-cl/show-cl.component';
import { AddClComponent } from './custledg/add-cl/add-cl.component';
import { EditClComponent } from './custledg/edit-cl/edit-cl.component';
import { CustledgService } from './custledg.service';
import { ProductComponent } from './product/product.component';
import { ShowProdComponent } from './product/show-prod/show-prod.component';
import { AddProdComponent } from './product/add-prod/add-prod.component';
import { EditProdComponent } from './product/edit-prod/edit-prod.component';
import { ProductService } from './product.service';
import { PurchaseComponent } from './purchase/purchase.component';
import { ShowPurComponent } from './purchase/show-pur/show-pur.component';
import { AddPurComponent } from './purchase/add-pur/add-pur.component';
import { EditPurComponent } from './purchase/edit-pur/edit-pur.component';
import { PurchaseService } from './purchase.service';
import { SupplierService } from './supplier.service';
import { SupplierComponent } from './supplier/supplier.component';
import { ShowSuppComponent } from './supplier/show-supp/show-supp.component';
import { AddSuppComponent } from './supplier/add-supp/add-supp.component';
import { EditSuppComponent } from './supplier/edit-supp/edit-supp.component';
import { SuppledgComponent } from './suppledg/suppledg.component';
import { ShowSlComponent } from './suppledg/show-sl/show-sl.component';
import { AddSlComponent } from './suppledg/add-sl/add-sl.component';
import { EditSlComponent } from './suppledg/edit-sl/edit-sl.component';
import { SalesproductComponent } from './salesproduct/salesproduct.component';
import { ShowSpComponent } from './salesproduct/show-sp/show-sp.component';
import { AddSpComponent } from './salesproduct/add-sp/add-sp.component';
import { EditSpComponent } from './salesproduct/edit-sp/edit-sp.component';
import { SalesproductService } from './salesproduct.service';
import { SalesComponent } from './sales/sales.component';
import { ShowSaleComponent } from './sales/show-sale/show-sale.component';
import { AddSaleComponent } from './sales/add-sale/add-sale.component';
import { EditSaleComponent } from './sales/edit-sale/edit-sale.component';
import { SalesService } from './sales.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DesignationComponent,
    ShowDesgComponent,
    AddDesgComponent,
    EditDesgComponent,
    CustomerComponent,
    ShowCustComponent,
    AddCustComponent,
    EditCustComponent,
    CustledgComponent,
    ShowClComponent,
    AddClComponent,
    EditClComponent,
    ProductComponent,
    ShowProdComponent,
    AddProdComponent,
    EditProdComponent,
    PurchaseComponent,
    ShowPurComponent,
    AddPurComponent,
    EditPurComponent,SupplierComponent,ShowSuppComponent,AddSuppComponent,EditSuppComponent, SuppledgComponent, ShowSlComponent, AddSlComponent, EditSlComponent, SalesproductComponent, 
    ShowSpComponent, AddSpComponent, 
    EditSpComponent, SalesComponent, ShowSaleComponent, AddSaleComponent, EditSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,
    MatIconModule,HttpClientModule,MatSortModule,FormsModule,
    MatDialogModule,MatSnackBarModule,BrowserAnimationsModule,MatButtonModule,MatFormFieldModule,MatInputModule
  ],
  providers: [EmployeeService,DesignationService,CustomerService,
      CustledgService, ProductService, PurchaseService, SupplierService,
      SalesproductService, SalesService
    ],
  bootstrap: [AppComponent],
  entryComponents: [AddEmpComponent, EditEmpComponent, ShowEmpComponent,
    AddDesgComponent, EditDesgComponent, ShowDesgComponent, ShowCustComponent, 
    EditCustComponent,AddCustComponent, ShowClComponent, AddClComponent, EditClComponent,ShowProdComponent,
    AddProdComponent, EditProdComponent, ShowPurComponent, AddPurComponent, EditPurComponent, ShowSuppComponent,
    AddSuppComponent, EditSuppComponent,ShowSpComponent, AddSpComponent,  ShowSlComponent, AddSlComponent, EditSlComponent,
    EditSpComponent,ShowSaleComponent, AddSaleComponent, EditSaleComponent
  ]
})
export class AppModule { }
