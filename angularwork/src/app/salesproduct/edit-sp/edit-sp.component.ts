import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SalesproductService } from 'src/app/salesproduct.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-sp',
  templateUrl: './edit-sp.component.html',
  styleUrls: ['./edit-sp.component.css']
})
export class EditSpComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<EditSpComponent>,
    public service:SalesproductService,
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
