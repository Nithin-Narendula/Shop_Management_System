import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Purchase } from './Models/Purchasemodel';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {


  constructor(private http:HttpClient) { }
  formData!: Purchase;

  readonly APIUrl = "https://localhost:44346/api/purchase"

  get():Observable<Purchase[]>{
    return this.http.get<Purchase[]>(this.APIUrl);
  }

  add(dept:Purchase){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:Purchase){
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
