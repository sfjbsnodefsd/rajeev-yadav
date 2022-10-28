import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
})
export class RegisterUsersComponent implements OnInit {
  users: User[] = [];
  constructor(public userService: UserService) {}
  deleteRow(user: any, index: any) {
    const observables = this.userService.deleteUser(user);
    observables.subscribe((response: any) => {
      console.log(response);
      this.users.splice(index, 1);
    });
  }
  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[];
    });
  }
}
