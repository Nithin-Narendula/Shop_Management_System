import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customer.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.css']
})
export class EditCustComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditCustComponent>,
    public service:CustomerService,
    public snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register Click');
    
  }
  onSubmit(form:NgForm){
    this.service.update(form.value).subscribe(res=>{
      this.snackBar.open('Updated Sucessfully','',{  
        duration:3000,
        verticalPosition:'top'});
    
    })
  }

}
