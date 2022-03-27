import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SupplierService } from 'src/app/supplier.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-supp',
  templateUrl: './edit-supp.component.html',
  styleUrls: ['./edit-supp.component.css']
})
export class EditSuppComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<EditSuppComponent>,
    public service:SupplierService,
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
