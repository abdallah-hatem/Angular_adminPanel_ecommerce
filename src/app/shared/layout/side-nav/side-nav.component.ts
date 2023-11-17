import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from '../../services/side-nav.service';
import { IsMobileService } from '../../services/is-mobile.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  private route = inject(Router);
  private sideNavService = inject(SideNavService);
  private isMobile = inject(IsMobileService);

  listItems = [
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
    {
      name: 'Sizes',
      subData: [
        { name: 'Add sizes', path: '/add-sizes' },
        { name: 'Manage sizes', path: '/manage-sizes' },
      ],
    },
    {
      name: 'Colors',
      subData: [
        { name: 'Add colors', path: '/add-colors' },
        { name: 'Manage colors', path: '/manage-colors' },
      ],
    },
    {
      name: 'Categories',
      subData: [
        { name: 'Add categories', path: '/add-categories' },
        { name: 'Manage categories', path: '/manage-categories' },
      ],
    },
    {
      name: 'Products',
      subData: [
        { name: 'Add products', path: '/add-products' },
        { name: 'Manage products', path: '/manage-products' },
      ],
    },
  ];

  selectedItem: number;

  constructor() {}

  public handleClick(e: number) {
    this.selectedItem = e;
    this.getCurrentPath();
  }

  getCurrentPath(): String {
    return this.route.url;
  }

  checkUrl(array: any[]): boolean {
    return array.filter((el) => el.path === this.getCurrentPath()).length > 0;
  }

  public collapse() {
    if (this.isMobile.isMobile()) {
      this.sideNavService.setCollapsed(false);
    }
  }
}
