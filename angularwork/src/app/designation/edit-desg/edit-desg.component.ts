import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DesignationService } from 'src/app/designation.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-desg',
  templateUrl: './edit-desg.component.html',
  styleUrls: ['./edit-desg.component.css']
})
export class EditDesgComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditDesgComponent>,
    public service:DesignationService,
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
