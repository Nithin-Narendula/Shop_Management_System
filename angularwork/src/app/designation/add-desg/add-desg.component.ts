import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DesignationService } from 'src/app/designation.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-add-desg',
  templateUrl: './add-desg.component.html',
  styleUrls: ['./add-desg.component.css']
})
export class AddDesgComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddDesgComponent>,
    public service:DesignationService,
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
       DesignationName:'',
        RoleName:'',
        Department:''
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
