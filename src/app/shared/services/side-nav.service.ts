import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  collapsed = new Subject<boolean>();
  constructor() {}

  setCollapsed(state: boolean) {
    this.collapsed.next(state);
  }

  getCollapsed(): Observable<boolean> {
    return this.collapsed.asObservable();
  }
}
