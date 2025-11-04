import { RouterLink } from '@angular/router';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { animate, spring, stagger } from 'animejs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  ngAfterViewInit(): void {
    animate('#square-animation .square', {
      x: '50cqw',
      rotate: { from: -360 },
      duration: 1250,
      ease: spring({
        bounce: 0.6,
        duration: 1000
      }),
      loop: true,
      alternate: true
    });
  }
}
