import { Component, OnInit } from '@angular/core';
import { RegistrationData } from '../registration-data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regdata= new RegistrationData;

  constructor() { }

  ngOnInit(): void {
  }
  
  submit(){
    console.log("Registration Working Successfully"+ JSON.stringify( this.regdata));
    alert("Registration Data"+ JSON.stringify(this.regdata));
  }

}
