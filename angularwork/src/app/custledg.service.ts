import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { CustomerLedger } from './Models/Customerledger';

@Injectable({
  providedIn: 'root'
})
export class CustledgService {

  constructor(private http:HttpClient) { }
  formData!: CustomerLedger;

  readonly APIUrl = "https://localhost:44346/api/customerledger"

  get():Observable<CustomerLedger[]>{
    return this.http.get<CustomerLedger[]>(this.APIUrl);
  }

  add(dept:CustomerLedger){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:CustomerLedger){
    return this.http.put(this.APIUrl,dept);
  }
  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }}
