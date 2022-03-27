import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CustledgService } from 'src/app/custledg.service';
@Component({
  selector: 'app-add-cl',
  templateUrl: './add-cl.component.html',
  styleUrls: ['./add-cl.component.css']
})
export class AddClComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddClComponent>,
    public service:CustledgService,
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
