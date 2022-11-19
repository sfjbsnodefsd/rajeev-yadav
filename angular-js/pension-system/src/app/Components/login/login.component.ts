import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
  }
  onLogin(form: NgForm) {
    console.log(form.value.username)
    this.authservice.login(form.value.username, form.value.password)
  }

}
