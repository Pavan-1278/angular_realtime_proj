import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form = new FormGroup({
    "id": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "phone": new FormControl(undefined)
});

  constructor() { }

  ngOnInit(): void {

  }

  submit(){
    alert(this.form.value.id+' '+this.form.value.name+' '+this.form.value.email+' '+this.form.value.phone);
  }

}
