import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Models/Customermodel';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  formData!: Customer;

  readonly APIUrl = "https://localhost:44346/api/customer"

  get():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.APIUrl);
  }

  add(dept:Customer){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:number){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:Customer){
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
