import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseService } from 'src/app/purchase.service';
@Component({
  selector: 'app-add-pur',
  templateUrl: './add-pur.component.html',
  styleUrls: ['./add-pur.component.css']
})
export class AddPurComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddPurComponent>,
    public service:PurchaseService,
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
      ProductID:'',
      ProductName:'',
      SupplierID:''
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
