import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular_main_proj';
  logged_in_user :boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.logged_in_user = this.authService.isUserLoggedIn();
  }
}
