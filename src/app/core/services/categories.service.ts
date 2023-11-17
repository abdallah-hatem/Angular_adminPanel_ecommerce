import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000';

  public getCategories(): Observable<any> {
    const url = `${this.baseUrl}/Category`;
    return this.http.get<any>(url);
  }

  public addCategory(data: { name: string }) {
    const url = `${this.baseUrl}/Category`;
    return this.http.post<any>(url, data);
  }

  public updateCategory(id: number, data: { name: string }) {
    const url = `${this.baseUrl}/Category/${id}`;
    return this.http.put<any>(url, data);
  }

  public deleteCategory(id: number) {
    const url = `${this.baseUrl}/Category/${id}`;
    return this.http.delete<any>(url);
  }
}
