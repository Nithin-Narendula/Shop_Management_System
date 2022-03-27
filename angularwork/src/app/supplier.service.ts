import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Supplier } from './Models/Suppliermodel';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http:HttpClient) { }
  formData!: Supplier;

  readonly APIUrl = "https://localhost:44346/api/supplier"

  get():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.APIUrl);
  }

  add(dept:Supplier){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:Supplier){
    return this.http.put(this.APIUrl,dept);
  }
  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
}
