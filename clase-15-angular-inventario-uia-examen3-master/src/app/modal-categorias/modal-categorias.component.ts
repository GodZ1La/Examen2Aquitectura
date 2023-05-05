import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { ICategoria, IPartida, ISubpartida }  from '../IPartida'
import { Router } from '@angular/router';
import { ModalItemsComponent } from '../modal-items/modal-items.component';

@Component({
  selector: 'app-modal-categorias',
  templateUrl: './modal-categorias.component.html',
  styleUrls: ['./modal-categorias.component.css']
})


export class ModalCategoriasComponent implements OnInit  {
  categorias: ICategoria[] = [];
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
  idPartida: any;
  idSubPartida: any;
 
   constructor(public datosPartida:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     
    this.idPartida = this.datosPartida.getIdPartida();
    this.idSubPartida = this.datosPartida.getIdSubpartida();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
            if(q.idSubpartida === this.idSubPartida)
            {
              this.categorias = q.categorias;
              console.log(this.categorias);
            }
          })
        }
          console.log(this.categorias);
        }
      )
    })

  }
                
   ngOnInit(): void {
                
    this.idPartida = this.datosPartida.getIdPartida();
    this.idSubPartida = this.datosPartida.getIdSubpartida();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
            if(q.idSubpartida === this.idSubPartida)
            {
              this.categorias = q.categorias;
              console.log(this.categorias);
            }
          })
        }
          console.log(this.categorias);
        }
      )
    })

  }




  openDialogNew(id:string) {
   console.log("id:"+id);
   this.datosPartida.setIdCategoria(id);
   const dialogRef = this.modal.open(ModalItemsComponent, {
    autoFocus: false,
    maxHeight: '90vh' //you can adjust the value as per your view
});
 
   dialogRef.afterClosed().subscribe((result: any) => {
     console.log(`Dialog result: ${result}`);
   });
 }
  }
       
  