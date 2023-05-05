import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { ICategoria, IPartida, ISubpartida }  from '../IPartida'
import { Router } from '@angular/router';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@Component({
  selector: 'app-new-solicitud',
  templateUrl: './new-solicitud.component.html',
  styleUrls: ['./new-solicitud.component.css']
})


export class NewSolicitudComponent implements OnInit  {
  items: IItem[] = [];
  pageActual:number=1;
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;
  peticiones: any;
  newIdSolicitud:string="";

   constructor(public datosServicio:DatosService,  public dialog: MatDialog, private Nav: Router) 
   {     
    this.datosServicio.getItemsCarrito$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }
                
   ngOnInit(): void {
                
    this.datosServicio.getItemsCarrito$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }



  
    
  agregaSolicitudMaterial()
  {
    var newSolicitud = <ISolicitudMaterial>{};
    
    newSolicitud.items = this.datosServicio.getItemsCarrito(); 
    
    this.datosServicio.enviaNewSolicitud(newSolicitud)
      .subscribe((result: ISolicitudMaterial) => {
         this.newIdSolicitud = result.id;
         //this.datosServicio.setIdSolicitudEntregada(this.newIdSolicitud);
         this.datosServicio.setIdSolicitud(this.newIdSolicitud);
         console.log(result);
        
        const dialogRef = this.dialog.open(ModalDetailsComponent);
        dialogRef.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });

      });

    
      
  }

  
  
}
       
  