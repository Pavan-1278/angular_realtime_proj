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
        path:'',
        component: DashboardComponent
    },
    {
        path:'employee',
        component: EmployeeComponent
    },
    {
        path:'add-employee',
        component: AddEmployeeComponent
    },
    {
        path:'update-employee',
        component: UpdateEmployeeComponent
    },
    {
        path:'parent',
        component: ParentComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
