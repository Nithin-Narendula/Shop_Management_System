import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from 'src/app/Models/Employee';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddEmpComponent } from '../add-emp/add-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:EmployeeService,private dialog:MatDialog, private snackBar:MatSnackBar) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshDepList();
    })
   }
  applyFilter(filtervalue : string){ 
    this.listdata.filter = filtervalue.trim().toLocaleLowerCase();
  }
  listdata! : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'EmployeeID', 'EmployeeName','PhoneNumber','MailID','Address','Department'];
  @ViewChild(MatSort) sort! : MatSort;

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getEmpList().subscribe(data => {
      this.listdata = new MatTableDataSource(data);
      this.listdata.sort = this.sort;
      console.log(data);
    })
  }

  onEdit(emp:Employee){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditEmpComponent, dialogConfig);
  }
  onDelete(id:string){
    if(confirm('Are you sure to Delete?')){
      this.service.deleteEmployee(id).subscribe(res=>{
        this.refreshDepList();
        this.snackBar.open('Deleted Succesfully','',{  
          duration:3000,
          verticalPosition:'top'});
      })
    }
  }
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);
  }

}
