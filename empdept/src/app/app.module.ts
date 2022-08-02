import { BrowserModule } from '@angular/platform-browser';
import { AddDepartmentDetailsComponent } from './component/add-dept/add-dept.component';
import { AddEmployeeDetailsComponent } from './component/add-emp/add-emp.component';
import { HomePageComponent } from './component/home/home.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentComponent } from './component/department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
const route : Routes = [
{path : '',component : HomePageComponent}, 
{path :'employees',component : EmployeeComponent},
{path : 'departments',component : DepartmentComponent},
{path : 'addEmployeeDetails',component :AddEmployeeDetailsComponent},
{path : 'addDepartmentDetails',component : AddDepartmentDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    HomePageComponent,
    AddDepartmentDetailsComponent,
    AddEmployeeDetailsComponent
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    FormData,
    RouterModule.forRoot(route),
  ],
  providers:[],
  bootstrap:[AppComponent]
})

