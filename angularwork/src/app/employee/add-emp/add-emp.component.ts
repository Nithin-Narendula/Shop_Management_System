import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ShowEmpComponent } from 'src/app/employee/show-emp/show-emp.component';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from 'express';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddEmpComponent>,
    public service:EmployeeService,
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
    EmployeeID:'',
    EmployeeName:'',
    PhoneNumber:'',
    MailID:'',
    Address:'',
    Department:''
    }
  }
  onClose(){
    this.dialogbox.close();
    // window.location.reload();
    this.service.filter('Register click');
}
  onSubmit(form:NgForm){
    this.service.addEmployee(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open('Added Succesfully','',{  
        duration:3000,
        verticalPosition:'top'});  
    })
  }
}
