import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:5000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  saveUser(user: { name: String; age: number; gender: String }) {
    return this.http.post(BASE_URL, user);
  }
  constructor(private http: HttpClient) {}
}
