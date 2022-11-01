import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterUsersComponent } from './Components/register-users/register-users.component';
import { PipeDemoComponent } from './Components/pipe-demo/pipe-demo.component';
import { EllipsisPipe } from './Pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    NavbarComponent,
    HomeComponent,
    RegisterUsersComponent,
    PipeDemoComponent,
    EllipsisPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
