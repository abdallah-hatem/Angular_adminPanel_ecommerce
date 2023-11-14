import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, ProductUpdate } from './product';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);

  private baseUrl = 'http://localhost:8000';

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.getToken()}`,
  });

  getToken() {
    return this.cookieService.get('jwt');
  }

  public getProducts(): Observable<any> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  public getProductById(id: number): Observable<any> {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  public addProduct(data: Product) {
    const url = `${this.baseUrl}/products`;

    return this.http.post<any>(url, data, { headers: this.headers });
  }

  public updateProduct(id: number, data: ProductUpdate) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.put<any>(url, data, { headers: this.headers });
  }

  public deleteProduct(id: number) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete<any>(url, { headers: this.headers });
  }
}
