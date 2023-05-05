import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { ISolicitudMaterial } from '../ISolicitudMaterial';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent 
{
  solicitudes: ISolicitudMaterial[] | undefined;

  constructor(public dialog: MatDialog, private datosSolicitud: DatosService) 
  {
    this.datosSolicitud.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
      console.log(data);
      this.solicitudes = data;
    })
    
    console.log("en modal");

  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalEditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




  
  }


