import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EditSuppComponent } from '../edit-supp/edit-supp.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddSuppComponent } from '../add-supp/add-supp.component';
import { Supplier } from 'src/app/Models/Suppliermodel';
import { SupplierService } from 'src/app/supplier.service';
@Component({
  selector: 'app-show-supp',
  templateUrl: './show-supp.component.html',
  styleUrls: ['./show-supp.component.css']
})
export class ShowSuppComponent implements OnInit {

  constructor(private service:SupplierService,private dialog:MatDialog, private snackBar:MatSnackBar) { 
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshDepList();
    })
  }
  applyFilter(filtervalue : string){ 
    this.listdata.filter = filtervalue.trim().toLocaleLowerCase();
  }
  listdata! : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options','SupplierID','SupplierCompany','ContactPerson','Phone'];
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

  onEdit(emp:Supplier){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditSuppComponent, dialogConfig);
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
    this.dialog.open(AddSuppComponent, dialogConfig);
  }



}
