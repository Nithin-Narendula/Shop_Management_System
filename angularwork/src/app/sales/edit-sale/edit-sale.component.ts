import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SalesService } from 'src/app/sales.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<EditSaleComponent>,
    public service:SalesService,
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
