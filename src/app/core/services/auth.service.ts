import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  cookieService = inject(CookieService);

  constructor(private http: HttpClient) {}

  public login(data: { email: string; password: string }): Observable<any> {
    const url = 'http://localhost:8000/auth/login';
    return this.http.post<any>(url, data);
  }

  public signup(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    const url = 'http://localhost:8000/auth/signup';
    return this.http.post<any>(url, data);
  }

  isLoggedIn() {
    const token = this.cookieService.get('jwt');
    if (!token) return false;

    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);

    const isTokenExpired = parsedPayload.exp > Date.now() / 1000;
    return isTokenExpired;
  }
}
