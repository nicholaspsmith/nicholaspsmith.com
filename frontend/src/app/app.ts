import { Component, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('frontend');

  @ViewChild('matrixVideo') matrixVideo?: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.matrixVideo) {
      const video = this.matrixVideo.nativeElement;
      video.muted = true;
      video.play().catch((error) => console.log("Video autoplay error:", error));
    }
  }
}
