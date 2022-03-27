import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierService } from 'src/app/supplier.service';
@Component({
  selector: 'app-add-supp',
  templateUrl: './add-supp.component.html',
  styleUrls: ['./add-supp.component.css']
})
export class AddSuppComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddSuppComponent>,
    public service:SupplierService,
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
      SupplierID:'',
      SupplierCompany:'',
      ContactPerson:'',
      Phone:''
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
