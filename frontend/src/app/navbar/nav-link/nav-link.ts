import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css',
})
export class NavLink {
  @Input() route: string = '/';
  @Input() label: string = '';
  @Input() isMobile: boolean = false;
  @Output() linkClicked = new EventEmitter<void>();

  desktopClass = 'rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white';
  mobileClass = 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white';

  onLinkClick(): void {
    this.linkClicked.emit();
  }
}
