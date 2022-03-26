import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged_in_user :boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logged_in_user = this.authService.isUserLoggedIn();
    this.router.navigate(['dashboard']);
  }
  logout(){
    this.authService.logoutUser();
  }

}
