import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaFpsRoutingModule } from './empresa-fps-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutPageComponent,
    InicioPageComponent,
    HeaderComponent
  ],
  exports:[
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    EmpresaFpsRoutingModule,
    RouterModule,
    AppRoutingModule
]
})
export class EmpresaFPSModule { }
