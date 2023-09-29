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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
