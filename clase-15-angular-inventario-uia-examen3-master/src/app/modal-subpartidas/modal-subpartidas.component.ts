import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { IPartida, ISubpartida }  from '../IPartida'
import { Router } from '@angular/router';
import { ModalCategoriasComponent } from '../modal-categorias/modal-categorias.component';

@Component({
  selector: 'app-modal-subpartidas',
  templateUrl: './modal-subpartidas.component.html',
  styleUrls: ['./modal-subpartidas.component.css']
})


export class ModalSubpartidasComponent implements OnInit  {
  subpartidas: ISubpartida[] = [];
  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedPartida?: IPartida;
  idPartida: any;
  idSubPartida: any;
 
   constructor(public datosPartida:DatosService,  public modal: MatDialog) 
   {     
    this.idPartida = this.datosPartida.getIdPartida();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          console.log(this.subpartidas);
        }
      })
    })
    
   }
                
   ngOnInit(): void {
                
    this.idPartida = this.datosPartida.getIdPartida();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          console.log(this.subpartidas);
        }
      })
    })
   }

   openDialogNew(id:string) {
    console.log("id:"+id);
    this.datosPartida.setIdSubpartida(id);
    const dialogRef = this.modal.open(ModalCategoriasComponent, {
      autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
  });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  }
       
  