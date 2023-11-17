import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  public getSizes(): Observable<any> {
    const url = `${this.baseUrl}/sizes`;
    return this.http.get<any>(url);
  }

  public addSize(data: { name: string }) {
    const url = `${this.baseUrl}/sizes`;
    return this.http.post<any>(url, data);
  }

  public updateSize(id: number, data: { name: string }) {
    const url = `${this.baseUrl}/sizes/${id}`;
    return this.http.put<any>(url, data);
  }

  public deleteSize(id: number) {
    const url = `${this.baseUrl}/sizes/${id}`;
    return this.http.delete<any>(url);
  }
}
