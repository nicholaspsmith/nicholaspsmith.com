import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuClass = 'max-h-0';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: { constructor: { name: string; }; }) => {
      if (event.constructor.name === 'NavigationStart') {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.menuClass = this.menuClass === 'max-h-0' ? 'max-h-48' : 'max-h-0';
  }

  closeMenu() {
    this.menuClass = 'max-h-0';
  }
}
