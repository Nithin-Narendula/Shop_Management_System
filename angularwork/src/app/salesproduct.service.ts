import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { SalesProduct } from './Models/SalesProduct';
@Injectable({
  providedIn: 'root'
})
export class SalesproductService {
  constructor(private http:HttpClient) { }
  formData!: SalesProduct;

  readonly APIUrl = "https://localhost:44346/api/salesproduct"

  get():Observable<SalesProduct[]>{
    return this.http.get<SalesProduct[]>(this.APIUrl);
  }

  add(dept:SalesProduct){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:SalesProduct){
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
