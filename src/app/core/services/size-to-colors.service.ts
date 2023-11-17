import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SizeToColorsAdd, SizeToColorsUpdate } from '../models/size-to-colors';

@Injectable({
  providedIn: 'root',
})
export class SizeToColorsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000';

  public deleteStc(id: number) {
    const url = `${this.baseUrl}/size-to-colors/${id}`;
    return this.http.delete<any>(url);
  }

  public addStc(data: SizeToColorsAdd) {
    const url = `${this.baseUrl}/size-to-colors`;
    return this.http.post<any>(url, data);
  }

  public updateStc(data: SizeToColorsUpdate) {
    const url = `${this.baseUrl}/size-to-colors/${data.id}`;
    return this.http.put<any>(url, data);
  }
}
