import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { Subject } from 'rxjs';
import { Authdata } from '../Auth/auth.model';
const LOGIN_URL = 'http://localhost:6003/mngmt/login';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  response: any;
  private token: string;
  private authStatusListener = new Subject<boolean>()
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {

    console.log(this.token);
    return this.token;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(username: string, password: string) {
    const authData: Authdata = { username, password };
    this.http.post(LOGIN_URL, authData).subscribe((response: any) => {
      console.log(response);
      this.token = response.data;
      this.authStatusListener.next(true);
      this.router.navigate(['list_pensioner'])
    })
  }
  logout() {
    this.token = '';
    this.authStatusListener.next(false);
    this.router.navigate(['login'])
  }
}
