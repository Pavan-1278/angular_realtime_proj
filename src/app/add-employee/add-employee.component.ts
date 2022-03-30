import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeData } from '../employee-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  add_emp= new EmployeeData;
  
  //msg boolean: [];

  form = new FormGroup({
    "id": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "phone": new FormControl(undefined)
});

  constructor (private empservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {

  }

  addEmployee()
  {
    this.empservice.createEmployee(this.add_emp).subscribe((data: {}) => {
      this.router.navigate(["employee"]);
    });
    
  }

  submit(){
    //  alert(this.form.value.id+' '+this.form.value.name+' '+this.form.value.email+' '+this.form.value.phone);
    this.addEmployee();
  }

}
