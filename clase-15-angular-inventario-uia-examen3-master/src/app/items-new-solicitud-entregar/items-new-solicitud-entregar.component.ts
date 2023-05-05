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

@Component({
  selector: 'app-items-new-solicitud-entregar',
  templateUrl: './items-new-solicitud-entregar.component.html',
  styleUrls: ['./items-new-solicitud-entregar.component.css']
})


export class ItemsNewSolicitudEntregarComponent implements OnInit  {
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

   constructor(public datosServicio:DatosService,  public dialog: MatDialog, private Nav: Router) 
   {     
    this.datosServicio.getItemsEntregar$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }
                
   ngOnInit(): void {
                
    this.datosServicio.getItemsEntregar$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }



  
    
  agregaNewSolicitudEntregar()
  {
    var newSolicitud = <ISolicitudMaterial>{};
    
    newSolicitud.items = this.datosServicio.getItemsEntregar(); 
    
    this.datosServicio.enviaNewSolicitud(newSolicitud)
    .subscribe((result: any) => {
      console.log(result);
    });

      this.datosServicio.limpiaEntregar(); 

    const dialogRef = this.dialog.open(SolicitudMaterialComponent);
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
  }
  
  }
       
  