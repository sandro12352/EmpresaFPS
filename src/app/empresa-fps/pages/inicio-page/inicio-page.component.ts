import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent implements OnInit,AfterViewInit  {
  @ViewChild('starsContainer', { static: false }) starsContainer!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute
  ) {}



  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.createStars();
      }, 0);
    }
  }

  createStars(): void {
    for (let i = 0; i < 100; i++) {
      const star = this.renderer.createElement('i');
      this.renderer.addClass(star, 'bi');
      this.renderer.addClass(star, 'bi-star-fill');
      this.renderer.addClass(star, 'star');

      const left = `${Math.random() * 100}vw`;
      const top = `${Math.random() * -100}vh`;
      const duration = `${15 + Math.random() * 8}s`; // Más rápido
      const opacity = Math.random();

      this.renderer.setStyle(star, 'left', left);
      this.renderer.setStyle(star, 'top', top);
      this.renderer.setStyle(star, 'animationDuration', duration);
      this.renderer.setStyle(star, 'opacity', opacity.toString());

      this.renderer.appendChild(this.starsContainer.nativeElement, star);
    }
  }
}
