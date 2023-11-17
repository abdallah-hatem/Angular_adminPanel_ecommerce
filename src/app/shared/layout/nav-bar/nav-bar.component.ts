import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  cookieService = inject(CookieService);
  router = inject(Router);
  authService = inject(AuthService);

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.toggleSideBar.emit();
  }

  logout() {
    this.cookieService.delete('jwt', '/');
    this.router.navigate([`login`]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
