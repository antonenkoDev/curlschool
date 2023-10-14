import { Component } from '@angular/core';
import { routes } from '../../../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public router: Router) {}

  navItems = routes.filter((route) => route.data && route.data.title && route.data.show);
  isMenuOpen = false; // to toggle menu
  openSubMenus: { [key: string]: boolean } = this.initializeSubMenus(); // To keep track of which submenu is open

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(path: string) {
    this.openSubMenus[path] = !this.openSubMenus[path];
  }

  private initializeSubMenus(): { [key: string]: boolean } {
    const subMenus: { [key: string]: boolean } = {};
    this.navItems.forEach((item) => {
      if (item.children && item.path) {
        subMenus[item.path] = false;
      }
    });
    return subMenus;
  }
}
