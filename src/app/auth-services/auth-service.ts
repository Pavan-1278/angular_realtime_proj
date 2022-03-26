import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService { 
 
    private isloggedIn: boolean;
    private userName:string | undefined;
 
    constructor( private router: Router) {
        if(localStorage.getItem('user')){
         this.isloggedIn=true;   
        }
        else{
            this.isloggedIn=false;
        }
    }
 
    login(username: string, password:string) {
 
        //Assuming users are provided the correct credentials.
        //In real app you will query the database to verify.
        this.isloggedIn=true;
        this.userName=username;
        localStorage.setItem('user',this.userName);
        window.location.reload();
        this.router.navigate(['dashboard']);
        return this.isloggedIn;
    }
 
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
        localStorage.clear();
        this.router.navigate(["login"]);
    }
 
}