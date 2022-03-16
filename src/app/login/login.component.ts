import { Component, OnInit } from "@angular/core";
import { LoginData } from "../login-data";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
    login_data = new LoginData();
    constructor(){
        
    }
    ngOnInit(): void {
        
    }
    submit(){
        alert('Submitted Login Data Username: '+this.login_data.username);
    }
}