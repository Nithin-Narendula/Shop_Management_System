import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Designation } from './Models/Designationmodel';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }
  formData!: Designation;

  readonly APIUrl = "https://localhost:44346/api/designation"

  get():Observable<Designation[]>{
    return this.http.get<Designation[]>(this.APIUrl);
  }

  add(dept:Designation){
    return this.http.post(this.APIUrl,dept);
  }

  delete(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  update(dept:Designation){
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
