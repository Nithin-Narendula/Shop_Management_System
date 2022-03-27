import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/customer.service';
@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddCustComponent>,
    public service:CustomerService,
    public snackBar:MatSnackBar) { }

    listdata! : MatTableDataSource<any>;

    ngOnInit(): void {
      this.resetForm();
  
    }
    resetForm(form?:NgForm){
      if(form!=null){
        form.resetForm();
      }
      this.service.formData = {
        CustomerID:0,
        CustomerName:'',
        Phone:'',
        Address:''
      }
    }
    onClose(){
      this.dialogbox.close();
      this.service.filter('Register click');
  }
    onSubmit(form:NgForm){
      this.service.add(form.value).subscribe(res=>{
        this.resetForm(form);
        this.snackBar.open('Added Succesfully','',{  
          duration:3000,
          verticalPosition:'top'});  
      })
    }


}
