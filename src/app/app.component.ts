import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('starsContainer', { static: false }) starsContainer!: ElementRef;
  title = 'EmpresaFPS';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = await import('aos');
      AOS.init();

      // Esperamos al próximo ciclo para asegurarnos de que starsContainer está listo
      setTimeout(() => this.createStars(), 0);
    }
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
