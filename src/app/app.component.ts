import { Component, HostListener, inject } from '@angular/core';
import { SideNavService } from './shared/services/side-nav.service';
import { IsMobileService } from './shared/services/is-mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private sideNavService = inject(SideNavService);
  private isMobileService = inject(IsMobileService);

  public sideBarOpen = true;
  public innerWidth: any;

  constructor() {
    this.sideNavService.getCollapsed().subscribe(() => this.toggleSideBar());
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.innerWidth = window.innerWidth;
  // }

  public toggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  public isMobile(): boolean {
    return this.isMobileService.isMobile();
  }
}
