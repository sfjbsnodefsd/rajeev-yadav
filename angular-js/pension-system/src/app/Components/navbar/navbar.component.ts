import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userLogedIn = false;
  private authListenerSub: Subscription
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userLogedIn = this.authService.getIsAuth();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(logedIn => {
      this.userLogedIn = logedIn;
    })
  }
  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }

}
