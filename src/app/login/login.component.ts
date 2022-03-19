import { Component, OnInit } from "@angular/core";
//import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormArray, PatternValidator } from "@angular/forms";
import { LoginData } from "../login-data";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    //loginForm!: FormGroup;
    login_data = new LoginData();
    emailregex = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
    constructor( ){
        //private fb: FormBuilder
    }
    ngOnInit(): void {
        // this.loginForm = this.fb.group({
        //     email: ['',[Validators.required,Validators.minLength(8)]],
        //     password: ['',[Validators.required,Validators.minLength(5)]]
        // });
    }
    submit(){
        // alert('Submitted Login Data Username: '+JSON.stringify(this.loginForm.get('email')?.value));
        // console.log(JSON.stringify(this.loginForm));
    }
}