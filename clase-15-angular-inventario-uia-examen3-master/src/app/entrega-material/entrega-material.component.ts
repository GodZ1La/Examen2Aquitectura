import { Component, OnInit, Input, Output } from '@angular/core';
import { IIngreso } from '../IPartida';
import {DatosService} from '../datos.service';


@Component({
  selector: 'app-entrega-material',
  templateUrl: './entrega-material.component.html',
  styleUrls: ['./entrega-material.component.css']
})

export class EntregaMaterialComponent implements OnInit {
 public peticion = { name: "", id: 0 }

 peticiones: IIngreso[] = [];

   constructor( public datosServicio:DatosService) 
  { 
   
  }
               
  ngOnInit(): void {               
  }
      
  agregar(idPartida:string, name:string, idSubpartida:string, nameSubpartida:string, idCategoria:string, nameCategoria:string, estatus:string, idProveedor:string, cantidad:string): void {
    name = name.trim();

    var newIngreso = <IIngreso>{};
    
    newIngreso.idPartida = idPartida;
    newIngreso.name = name;
    newIngreso.idSubpartida = idSubpartida;
    newIngreso.nameSubpartida = nameSubpartida;
    newIngreso.idCategoria = idCategoria;
    newIngreso.nameCategoria = nameCategoria;
    newIngreso.cantidad = cantidad
    newIngreso.estatus = estatus;
    newIngreso.idProveedor = idProveedor; 
    
    if (!name) { return; }
    this.datosServicio.agregaIngreso(newIngreso)
      .subscribe((peticion: IIngreso) => {
        this.peticiones.push(peticion);
      });
  }
  
}
