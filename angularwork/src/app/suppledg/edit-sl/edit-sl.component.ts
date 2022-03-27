import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SuppledgService } from 'src/app/suppledg.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-sl',
  templateUrl: './edit-sl.component.html',
  styleUrls: ['./edit-sl.component.css']
})
export class EditSlComponent implements OnInit {
  constructor(public dialogbox:MatDialogRef<EditSlComponent>,
    public service:SuppledgService,
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
