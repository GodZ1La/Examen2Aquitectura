import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component'
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component'
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component'
import { SolicitudesComponent } from '../solicitudes/solicitudes.component'
import { EntregaMaterialComponent } from '../entrega-material/entrega-material.component'
import { NewPartidaComponent } from '../new-partida/new-partida.component';
import { ConsultaSolicitudEntregadaComponent } from '../consulta-solicitud-entregada/consulta-solicitud-entregada.component';
import { NewSolicitudEntregadaComponent } from '../new-solicitud-entregada/new-solicitud-entregada.component';
import { ConsultaIngresoComponent } from '../consulta-ingreso/consulta-ingreso.component';
import { ConsultaBajaComponent } from '../consulta-baja/consulta-baja.component';
import { NewBajaComponent } from '../new-baja/new-baja.component';

const routes: Routes = [
  { path: 'home', component: SolicitudMaterialComponent},
  { path: 'consultaPartidas', component: ModalPartidasComponent},
  { path: 'nuevasPartidas', component: NewPartidaComponent},
  { path: 'consultaSolicitudes', component: SolicitudesComponent},
  { path: 'nuevasSolicitudes', component: ModalPartidasComponent},
  { path: 'consultaSolicitudesEntregadas', component: ConsultaSolicitudEntregadaComponent},
  { path: 'nuevaSolicitudEntregada', component: NewSolicitudEntregadaComponent},
  { path: 'consultaIngreso', component: ConsultaIngresoComponent},
  { path: 'nuevoIngreso', component: EntregaMaterialComponent},
  { path: 'consultaBaja', component: ConsultaBajaComponent},
  { path: 'nuevaBaja', component: NewBajaComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }