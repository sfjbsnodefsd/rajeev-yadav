import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListPensionerComponent } from './Components/list-pensioner/list-pensioner.component';
import { AddPensionerComponent } from './Components/add-pensioner/add-pensioner.component';
import { PensionerDetailsComponent } from './Components/pensioner-details/pensioner-details.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptor } from './Auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListPensionerComponent,
    AddPensionerComponent,
    PensionerDetailsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
