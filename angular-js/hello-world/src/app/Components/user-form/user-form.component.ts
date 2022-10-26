import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  title = 'Enter form details';
  firstName = '';
  lastName = '';
  gender = '';
  save() {
    console.log(this.firstName, this.lastName, this.gender);
  }
  constructor() {}

  ngOnInit(): void {}
}
