import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Sales } from './Models/Salesmodel';
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private http:HttpClient) { }
  formData!: Sales;

  readonly APIUrl = "https://localhost:44346/api/sales"

  get():Observable<Sales[]>{
    return this.http.get<Sales[]>(this.APIUrl);
  }

  add(dept:Sales){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:Sales){
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
