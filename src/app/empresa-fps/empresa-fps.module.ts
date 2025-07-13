import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaFpsRoutingModule } from './empresa-fps-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    LayoutPageComponent,
    InicioPageComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  exports:[
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    EmpresaFpsRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
]
})
export class EmpresaFPSModule { }
