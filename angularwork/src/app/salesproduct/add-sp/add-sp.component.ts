import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SalesproductService } from 'src/app/salesproduct.service';
@Component({
  selector: 'app-add-sp',
  templateUrl: './add-sp.component.html',
  styleUrls: ['./add-sp.component.css']
})
export class AddSpComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<AddSpComponent>,
    public service:SalesproductService,
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
      HSNnumber:0,
      Quantity:0,
      SalePrice:0,
      GST:''
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
