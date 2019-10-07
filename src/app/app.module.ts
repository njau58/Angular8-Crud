import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
OktaAuthModule.initAuth({
  issuer: 'https://okta.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1ep9ru08mKfldY357'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }