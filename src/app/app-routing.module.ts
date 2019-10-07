import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent, 
  data: { onAuthRequired }},
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent }, 
{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}