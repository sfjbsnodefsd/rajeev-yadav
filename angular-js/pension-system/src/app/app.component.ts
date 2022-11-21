import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  title = 'pension-system';
  ngOnInit() {
    console.log("app componenne")
    this.authService.autoAuthUser();
  }
}
