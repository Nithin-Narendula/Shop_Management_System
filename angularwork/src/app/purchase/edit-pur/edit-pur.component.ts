import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PurchaseService } from 'src/app/purchase.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-pur',
  templateUrl: './edit-pur.component.html',
  styleUrls: ['./edit-pur.component.css']
})
export class EditPurComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<EditPurComponent>,
    public service:PurchaseService,
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
