import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  public getColors(): Observable<any> {
    const url = `${this.baseUrl}/colors`;
    return this.http.get<any>(url);
  }

  public addColor(data: { name: string; hex: string }) {
    const url = `${this.baseUrl}/colors`;
    return this.http.post<any>(url, data);
  }

  public updateColor(id: number, data: { name?: string; hex?: string }) {
    const url = `${this.baseUrl}/colors/${id}`;
    return this.http.put<any>(url, data);
  }

  public deleteColor(id: number) {
    const url = `${this.baseUrl}/colors/${id}`;
    return this.http.delete<any>(url);
  }
}
