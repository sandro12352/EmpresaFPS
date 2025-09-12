import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './empresa-fps/pages/inicio-page/inicio-page.component';
import { NosotrosComponent } from './empresa-fps/pages/nosotros/nosotros.component';
import { ContactoComponent } from './empresa-fps/pages/contacto/contacto.component';
import { ServiciosComponent } from './empresa-fps/pages/servicios/servicios.component';
import { title } from 'process';

const routes: Routes = [
  {
    path:'',
    component:InicioPageComponent,
    data:{
      title:'Agencia de Desarrollo Web | Páginas Web y Sistemas en Perú',
      description:'Ofrecemos desarrollo web profesional: páginas web modernas, sistemas a medida y soluciones digitales.'
    }
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: {
      title: 'Nosotros | Tu aliado en Desarrollo Web',
      description: 'Conoce a nuestro equipo de expertos en desarrollo web. Creamos páginas, sistemas y soluciones digitales adaptadas a tu negocio.'
    }
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: {
      title: 'Servicios | Desarrollo Web y Sistemas a Medida',
      description: 'Descubre nuestros servicios de desarrollo web, diseño de páginas modernas, sistemas personalizados y soluciones digitales adaptadas a tu empresa.'
    }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: {
      title: 'Contacto | Hablemos sobre tu Proyecto Web',
      description: 'Ponte en contacto con nosotros para asesoría y desarrollo de tu página web o sistema a medida. Estamos listos para ayudarte a impulsar tu negocio digital.'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
