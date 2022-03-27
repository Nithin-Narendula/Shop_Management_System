import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddProdComponent>,
    public service:ProductService,
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
       ItemID:'',
       ProductName:'',
       Department:'',
       Price:'',
       Quantity:0
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
