import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './empresa-fps/pages/inicio-page/inicio-page.component';
import { NosotrosComponent } from './empresa-fps/pages/nosotros/nosotros.component';
import { ContactoComponent } from './empresa-fps/pages/contacto/contacto.component';
import { ServiciosComponent } from './empresa-fps/pages/servicios/servicios.component';

const routes: Routes = [
  {
    path:'',
    component:InicioPageComponent,
  },
  {
    path:'nosotros',
    component:NosotrosComponent,
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
