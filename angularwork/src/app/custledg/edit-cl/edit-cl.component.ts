import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustledgService } from 'src/app/custledg.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-cl',
  templateUrl: './edit-cl.component.html',
  styleUrls: ['./edit-cl.component.css']
})
export class EditClComponent implements OnInit {
 constructor(public dialogbox:MatDialogRef<EditClComponent>,
    public service:CustledgService,
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
