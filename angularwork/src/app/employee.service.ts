import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Models/Employee';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  formData!: Employee;

  readonly APIUrl = "https://localhost:44346/api/employee"

  getEmpList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.APIUrl);
  }

  addEmployee(dept:Employee){
    return this.http.post(this.APIUrl,dept);
  }

  deleteEmployee(id:string){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  updateEmployee(dept:Employee){
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
