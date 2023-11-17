import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsMobileService {
  private innerWidth = new Subject<number>();
  private maxMobileWidth: number = 600;

  constructor() {}

  getWidth(): Observable<number> {
    return this.innerWidth.asObservable();
  }

  isMobile() {
    return window.innerWidth <= this.maxMobileWidth;
  }
}
