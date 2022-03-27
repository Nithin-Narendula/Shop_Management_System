import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EditSlComponent } from '../edit-sl/edit-sl.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddSlComponent } from '../add-sl/add-sl.component';
import { SuppledgService } from 'src/app/suppledg.service';
import { SupplierLedger } from 'src/app/Models/SuppLedgmodel';
@Component({
  selector: 'app-show-sl',
  templateUrl: './show-sl.component.html',
  styleUrls: ['./show-sl.component.css']
})
export class ShowSlComponent implements OnInit {

  constructor(private service:SuppledgService,private dialog:MatDialog, private snackBar:MatSnackBar) { 
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshDepList();
    })
  }
  applyFilter(filtervalue : string){ 
    this.listdata.filter = filtervalue.trim().toLocaleLowerCase();
  }
  listdata! : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'InvoiceID', 'GrandTotalAmount','PaidAmount','DueAmount','BalanceAmount'];
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

  onEdit(emp:SupplierLedger){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditSlComponent, dialogConfig);
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
    this.dialog.open(AddSlComponent, dialogConfig);
  }


}
