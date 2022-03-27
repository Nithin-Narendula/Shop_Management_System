import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { EditProdComponent } from '../edit-prod/edit-prod.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddProdComponent } from '../add-prod/add-prod.component';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/Models/Productmodel';
@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service:ProductService,private dialog:MatDialog, private snackBar:MatSnackBar) { 
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshDepList();
    })
  }
  applyFilter(filtervalue : string){ 
    this.listdata.filter = filtervalue.trim().toLocaleLowerCase();
  }
  listdata! : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options', 'ItemID', 'ProductName','Department','Price','Quantity'];
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

  onEdit(emp:Product){
    this.service.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditProdComponent, dialogConfig);
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
    this.dialog.open(AddProdComponent, dialogConfig);
  }


}
