import { Component, OnInit, Input, Output } from '@angular/core';
import { IPartida } from '../IPartida';
import {DatosService} from '../datos.service';


@Component({
  selector: 'app-new-partida',
  templateUrl: './new-partida.component.html',
  styleUrls: ['./new-partida.component.css']
})

export class NewPartidaComponent implements OnInit {
 public peticion = { name: "", id: 0 }

 peticiones: IPartida[] = [];

   constructor( public datosServicio:DatosService) 
  { 
   
  }
               
  ngOnInit(): void {               
  }
      
  agregar(idPartida:string, name:string, idSubpartida:string, nameSubpartida:string, idCategoria:string, nameCategoria:string): void {
    name = name.trim();

    var newPartida = <IPartida>{};
    
    newPartida.idPartida = idPartida;
    newPartida.name = name;
    newPartida.idSubpartida = idSubpartida;
    newPartida.nameSubpartida = nameSubpartida;
    newPartida.idCategoria = idCategoria;
    newPartida.nameCategoria = nameCategoria;
    
    if (!name) { return; }
    this.datosServicio.agregaPartida(newPartida)
      .subscribe((peticion: IPartida) => {
        this.peticiones.push(peticion);
      });
  }
  
}
