import * as AOS from 'aos';
import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('starsContainer', { static: false }) starsContainer!: ElementRef;
  title = 'EmpresaFPS';

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {}

 

  ngAfterViewInit() {
    AOS.init();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh(); // Reinicializa AOS cuando cambia la ruta
        }, 50);
      }
    });
  }


  createStars(): void {
    if (!this.starsContainer) return;

    for (let i = 0; i < 100; i++) {
      const star = this.renderer.createElement('i');
      this.renderer.addClass(star, 'bi');
      this.renderer.addClass(star, 'bi-star-fill');
      this.renderer.addClass(star, 'star');

      const left = `${Math.random() * 100}vw`;
      const top = `${Math.random() * -100}vh`;
      const duration = `${10 + Math.random() * 5}s`; // Más rápido
      const opacity = Math.random();

      this.renderer.setStyle(star, 'left', left);
      this.renderer.setStyle(star, 'top', top);
      this.renderer.setStyle(star, 'animationDuration', duration);
      this.renderer.setStyle(star, 'opacity', opacity.toString());

      this.renderer.appendChild(this.starsContainer.nativeElement, star);
    }
  }
}
