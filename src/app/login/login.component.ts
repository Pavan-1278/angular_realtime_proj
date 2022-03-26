import { Component, OnInit } from "@angular/core";
import { LoginData } from "../login-data";
import { AuthService } from "../auth-services/auth-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    
    userName= '';
    password= '';
    login_data = new LoginData();
    emailregex = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
    constructor(private authService: AuthService ){
        
    }
    ngOnInit(): void {

    }
    submit(){
        this.authService.login(this.userName,this.password);
    }
}