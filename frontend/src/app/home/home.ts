import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { animate, stagger, splitText } from 'animejs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  ngAfterViewInit(): void {
    const { chars } = splitText('h2', { words: false, chars: true });

    animate(chars, {
      // Property keyframes
      y: [
        { to: '-2.5rem', ease: 'outExpo', duration: 800 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 0 }
      ],
      delay: stagger(50),
      ease: 'inOutCirc',
      loopDelay: 3000,
      loop: true
    });
  }
}
