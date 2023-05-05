import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { IPartida } from 'src/app/IPartida';
import { DatosService } from 'src/app/datos.service';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit
{
    pageActual:number=1;
    urlaccion:string = 'assets/icon-reporte/';
  //Material table columns
  // displayedColumns: string[] = ['id','nombre','categoria','idCategoria', 'clave', 'tipo', 'longitud', 'latitud', 'tipoRiesgo', 'tipoEventualidad','estatus','accion'];
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'idCategoria', 'clave', 'tipo', 'longitud', 'latitud', 'tipoRiesgo', 'tipoEventualidad'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;

  public dataAlerta: IPartida[] = [];
  public alerta$ = new BehaviorSubject<IPartida[]>(this.dataAlerta);
  public alertas: IPartida[] = [];
  public numAlertas: number = 0;

  public isLoading = false;
  public totalRows = 0;
  public tamanoPagina = 5;
  public paginaActual = 0;
  public ndxPagina = 0;
  public tamanoPaginaOpciones: number[] = [5, 10, 25, 100];
  private paginaActual$ = new BehaviorSubject<number>(0);
  private tamanoPagina$ = new BehaviorSubject<number>(0);
  public dataPagina: IPartida[] = [];
  private paginaAlerta$ = new BehaviorSubject<IPartida[]>(this.dataPagina);
  private paginaAlertas: IPartida[] = [];



  constructor(private datosAlertas: DatosService, public modal: MatDialog
  ) {
    this.alertas = [];

    this.datosAlertas.getPartidas().subscribe(async data => {
      this.totalRows = data.length;
      this.dataAlerta = data;
      //console.log("Alertas en Busqueda:"+data.length);
      this.numAlertas = this.alertas.length;
      this.dataSource = new MatTableDataSource<IPartida>(data);
      this.dataSource.paginator = this.paginator;
    });
  }


  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.dataSource.pageIndex = event.pageIndex;
    this.dataSource.pageSize = event.pageSize;
    //this.tamanoPagina = event.pageSize;
    //this.paginaActual = event.pageIndex;
    //this.datosAlertas.findIPartidas(this.paginaActual, this.tamanoPagina);
  }

  loadData() {
    this.isLoading = true;
  }

  openDialog(id:any){
    console.log(id)
  }

  GiveDataForm(id: any,accion:string) {
        console.log(id+accion)
  }

  eventualidad(app: string,  id: any) {
    console.log(id,app)
    switch (app) {
      case 'verEventualidad':

        console.log('estaviendo Eventualidad' );
        break;

      case 'editarEventualidad':

        console.log('estaviendo Eventualidad');
        break;

      case 'eliminarEventualiadad':

         this.openDialog

        break;
    }
  }

}
