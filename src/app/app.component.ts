import * as AOS from 'aos';
import {
  Component,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('circuitContainer', { static: false }) circuitContainer!: ElementRef;
  title = 'EmpresaFPS';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    
  }

 

 ngAfterViewInit() {
    this.createCircuitIcons();
    if (isPlatformBrowser(this.platformId)) {
       AOS.init();
    }
   

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route?.data ?? [])
      )
      .subscribe((data) => {
        // 🔹 Reinicializa AOS en cada cambio de ruta
        setTimeout(() => {
          AOS.refresh();
        }, 50);

        // 🔹 Actualiza Title y Meta Description
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
        if (data['description']) {
          this.metaService.updateTag({
            name: 'description',
            content: data['description']
          });
        }
      });
  }


  createCircuitIcons(): void {
  const icons = [
      'bi-cpu-fill', 'bi-diagram-3-fill', 'bi-hdd-network',
      'bi-motherboard', 'bi-gpu-card', 'bi-robot', 'bi-cloud',
      'bi-terminal-fill', 'bi-code', 'bi-usb-symbol'
    ];

    for (let i = 0; i < 80; i++) {
      const icon = this.renderer.createElement('i');
      this.renderer.addClass(icon, 'bi');
      this.renderer.addClass(icon, 'circuit-icon');
      this.renderer.addClass(icon, icons[Math.floor(Math.random() * icons.length)]);

      const left = `${Math.random() * 100}vw`;
      const top = `${Math.random() * 100}vh`;
      const size = `${15 + Math.random() * 1.2}px`;
      const duration = `${10 + Math.random() * 4}s`; // Movimiento más rápido

      this.renderer.setStyle(icon, 'left', left);
      this.renderer.setStyle(icon, 'top', top);
      this.renderer.setStyle(icon, 'fontSize', size);
      this.renderer.setStyle(icon, 'animationDuration', duration);

      this.renderer.appendChild(this.circuitContainer.nativeElement, icon);
    }
}


}
