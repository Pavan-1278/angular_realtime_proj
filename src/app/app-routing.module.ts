import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AuthGuardService } from './auth-services/auth-service-guard';

const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component: RegistrationComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path:'employee',
        component: EmployeeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path:'add-employee',
        component: AddEmployeeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path:'update-employee',
        component: UpdateEmployeeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path:'parent',
        component: ParentComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'pipes',
        component: PipesComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
