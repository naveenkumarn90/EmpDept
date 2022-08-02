import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  employeeList(){
    this.route.navigateByUrl("/employees")
  }

  departmentList(){
    this.route.navigateByUrl("/departments")
  }
}