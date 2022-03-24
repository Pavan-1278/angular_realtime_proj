import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { AuthGuardService } from './auth-services/auth-service-guard';
import { AuthService } from './auth-services/auth-service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegistrationComponent, DashboardComponent, HeaderComponent, FooterComponent, EmployeeComponent, AddEmployeeComponent, UpdateEmployeeComponent, ParentComponent, ChildComponent, PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
