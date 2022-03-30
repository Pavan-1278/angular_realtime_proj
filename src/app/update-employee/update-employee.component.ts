import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  emp_upd = {
    id:"",
    name:"",
    email:"",
    phone:undefined
  }

  @Input() currentEmp: any;

  @Output() closewindow= new EventEmitter();
  
  constructor( private empservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.emp_upd = this.currentEmp;
  }
  submit(){
    alert(this.emp_upd.id+" "+this.emp_upd.name+" "+this.emp_upd.email+" "+this.emp_upd.phone);
    this.updateEmployee();
    this.closewindow.emit('false');
  }
  
  updateEmployee(){
    this.empservice.updateEmployee(this.emp_upd.id,this.emp_upd).subscribe((data: {}) => {
      this.router.navigate(["employee"]);
    });
      //alert("Employee Addition Successful");
      //window.location.reload();
      
  }
}