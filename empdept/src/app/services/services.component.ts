import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department, Employee } from '../common/common.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementServiceService {
 private employeeURL = "http://localhost:8080/api/employees"
 private employeeDepartmentURL = "http://localhost:8080/api/departments";
  constructor(private httpClient : HttpClient) { }

  getAllEmployee() : Observable<Employee[]>{
    console.log(this.httpClient.get<getEmployeeResponse>(this.employeeURL).pipe(map(response => response._embedded.employees)));
    return this.httpClient.get<getEmployeeResponse>(this.employeeURL).pipe(map(response => response._embedded.employees))
  }

  getEmployeeDepartmentDetails() : Observable<Department[]>{
    console.log(this.httpClient.get<getEmployeeDepartment>(this.employeeDepartmentURL).pipe(map(response => response._embedded.departments)));
    return this.httpClient.get<getEmployeeDepartment>(this.employeeDepartmentURL).pipe(map(response => response._embedded.departments))
  }



}

interface getEmployeeResponse{
  _embedded : {
    employees : Employee[]
  }
}

interface getEmployeeDepartment{
  _embedded :{
    departments : Department[]
  }
}