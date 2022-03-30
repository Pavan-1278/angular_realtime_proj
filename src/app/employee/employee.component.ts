import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any = [];
  currentEmp: any;
  showUpdate= false;
  constructor(private empservice: EmployeeService, private router: Router) { 

  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.empservice. getEmployees().subscribe((data: {}) => {
      this.employees = data;
    });

  }
  
  deleteEmployee(id1 : any){
    this.empservice. deleteEmployee(id1).subscribe((data: {}) => {
    this.ngOnInit();
    });
  }
  updateEmployee(emp:any){
    this.currentEmp=emp;
    this.showUpdate= true;
  }
  updateValue($event: any){
    this.showUpdate=false;
  }

}
 
