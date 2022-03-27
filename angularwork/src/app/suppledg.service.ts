import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { SupplierLedger } from './Models/SuppLedgmodel';
@Injectable({
  providedIn: 'root'
})
export class SuppledgService {
  constructor(private http:HttpClient) { }
  formData!: SupplierLedger;

  readonly APIUrl = "https://localhost:44346/api/supplierledger"

  get():Observable<SupplierLedger[]>{
    return this.http.get<SupplierLedger[]>(this.APIUrl);
  }

  add(dept:SupplierLedger){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:SupplierLedger){
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
