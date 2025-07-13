import * as AOS from 'aos';
import {
  Component,
  AfterViewInit,
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
  @ViewChild('circuitContainer', { static: false }) circuitContainer!: ElementRef;
  title = 'EmpresaFPS';

  constructor(
    private router: Router,
    private renderer: Renderer2
    
  ) {
    
  }

 

  ngAfterViewInit() {
      this.createCircuitIcons();
    AOS.init();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh(); // Reinicializa AOS cuando cambia la ruta
        }, 50);
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
