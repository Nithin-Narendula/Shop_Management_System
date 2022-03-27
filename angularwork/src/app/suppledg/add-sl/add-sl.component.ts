import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SuppledgService } from 'src/app/suppledg.service';
import { SuppledgComponent } from '../suppledg.component';
@Component({
  selector: 'app-add-sl',
  templateUrl: './add-sl.component.html',
  styleUrls: ['./add-sl.component.css']
})
export class AddSlComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddSlComponent>,
    public service:SuppledgService,
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
        InvoiceID:'',
        GrandTotalAmount:0,
        PaidAmount:0,
        DueAmount:0,
        BalanceAmount:0
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
