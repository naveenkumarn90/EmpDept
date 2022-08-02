export class Employee {
  constructor(public employeeNumber  : number,
      public employeeName : string,
      public job : string,
      public hireDate : Date,
      public managerId : number,
      public salary : number){}
}

export class Department {
  constructor(public employeeNumber : number,
              public department : string,
              public netSalary : number){}
}