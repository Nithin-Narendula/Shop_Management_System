import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EditClComponent } from '../edit-cl/edit-cl.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddClComponent } from '../add-cl/add-cl.component';
import { CustledgService } from 'src/app/custledg.service';
import { CustomerLedger } from 'src/app/Models/Customerledger';
@Component({
  selector: 'app-show-cl',
  templateUrl: './show-cl.component.html',
  styleUrls: ['./show-cl.component.css']
})
export class ShowClComponent implements OnInit {

  constructor(private service:CustledgService,private dialog:MatDialog, private snackBar:MatSnackBar) { 
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

  onEdit(emp:CustomerLedger){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditClComponent, dialogConfig);
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
    this.dialog.open(AddClComponent, dialogConfig);
  }


}
