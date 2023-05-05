import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';
import { ISolicitudMaterial } from '../ISolicitudMaterial';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component';

@Component({
  selector: 'app-solicitud-material',
  templateUrl: './solicitud-material.component.html',
  styleUrls: ['./solicitud-material.component.css']
})
export class SolicitudMaterialComponent {
  
  solicitudes: ISolicitudMaterial[] = [];

  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedSolicitud?: ISolicitudMaterial;
 
   constructor(public dialog: MatDialog, public datosSolicitud:DatosService) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosSolicitud.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
       console.log(data);
       this.solicitudes = data;
     })    
   }   

openDialogEdit() {
  const dialogRef = this.dialog.open(ModalEditComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}

openDialogNew() {
  const dialogRef = this.dialog.open(ModalPartidasComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}

openDialogDelete(id:string) {
  console.log("id:"+id);
  this.datosSolicitud.setIdSolicitud(id);
  const dialogRef = this.dialog.open(ModalEditComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}


openDialogDetails(id:string) {
  console.log("id:"+id);
  this.datosSolicitud.setIdSolicitud(id);
  const dialogRef = this.dialog.open(ModalDetailsComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}


  
}
       
  