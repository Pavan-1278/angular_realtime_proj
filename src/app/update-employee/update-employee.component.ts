import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee = {
    id:"",
    name:"",
    email:"",
    phone:undefined
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert(this.employee.id+" "+this.employee.name+" "+this.employee.email+" "+this.employee.phone);

  }

}
