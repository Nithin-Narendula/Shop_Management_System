import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from 'src/app/Models/Employee';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import { EditDesgComponent } from '../edit-desg/edit-desg.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddDesgComponent } from '../add-desg/add-desg.component';
import { DesignationService } from 'src/app/designation.service';
import { Designation } from 'src/app/Models/Designationmodel';
@Component({
  selector: 'app-show-desg',
  templateUrl: './show-desg.component.html',
  styleUrls: ['./show-desg.component.css']
})
export class ShowDesgComponent implements OnInit {

  constructor(private service:DesignationService,private dialog:MatDialog, private snackBar:MatSnackBar) { 
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshDepList();
    })
  }
  applyFilter(filtervalue : string){ 
    this.listdata.filter = filtervalue.trim().toLocaleLowerCase();
  }
  listdata! : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'DesignationName', 'RoleName','Department'];
  @ViewChild(MatSort) sort! : MatSort;

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.get().subscribe(data => {
      this.listdata = new MatTableDataSource(data);
      this.listdata.sort = this.sort;
      console.log(data);
    })
  }

  onEdit(emp:Designation){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditDesgComponent, dialogConfig);
  }
  onDelete(id:string){
    if(confirm('Are you sure to Delete?')){
      this.service.delete(id).subscribe(res=>{
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
    this.dialog.open(AddDesgComponent, dialogConfig);
  }

}
