import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditEmpComponent>,
    public service:EmployeeService,
    public snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register Click');
  }
  onSubmit(form:NgForm){
    this.service.updateEmployee(form.value).subscribe(res=>{
      this.snackBar.open('Updated Sucessfully','',{  
        duration:3000,
        verticalPosition:'top'});
    
    })
  }

}
