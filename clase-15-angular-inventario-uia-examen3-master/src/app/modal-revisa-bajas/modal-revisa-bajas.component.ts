import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { ICategoria, IPartida, ISubpartida }  from '../IPartida'
import { Router } from '@angular/router';
import { IItem } from '../ISolicitudMaterial';

@Component({
  selector: 'app-modal-revisa-bajas',
  templateUrl: './modal-revisa-bajas.component.html',
  styleUrls: ['./modal-revisa-bajas.component.css']
})


export class ModalRevisaBajasComponent implements OnInit  {
  pageActual:number=1;
  public pageSizes = 5;
  public paginaActual = 0;
  public ndxPagina = 0;

  categorias: ICategoria[] = [];
  subpartidas: ISubpartida[] = [];
  itemsCat: IItem[] = [];
  items: IItem[] = [];
  urlaccion:string = 'assets/icon-tabla/';
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;
  idPartida: any;
  idSubPartida: any;
  idCategoria: any;
  form: FormGroup | undefined;
  checked:boolean=false;
  idRow:string="";
  itemsCarrito: IItem[] = [];
  itemNoExiste: boolean=true;
   constructor(public datosPartida:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     
    this.idPartida = this.datosPartida.getIdPartida();
    this.idSubPartida = this.datosPartida.getIdSubpartida();
    this.idCategoria = this.datosPartida.getIdCategoria();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
              this.categorias = q.categorias;
              this.categorias.forEach(r => {
                  this.itemsCat = r.items;
                  console.log(this.itemsCat);
                  this.itemNoExiste=true;
                  this.itemsCat.forEach(s => {
                    if(s.estatus === "Disponible")
                    {
                      this.items.forEach(item=>{
                            if(s.id === item.id)
                            {
                              this.itemNoExiste=false;
                            }
                      })
                      if(this.itemNoExiste)
                      {
                        this.items.push(s);
                        console.log(this.items);
                      }
                    }
                  })
              })
              console.log(this.categorias);            
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
    this.idCategoria = this.datosPartida.getIdCategoria();

    this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.idPartida === this.idPartida)
        {
          this.subpartidas = p.subpartidas;
          this.subpartidas.forEach(q => {
              this.categorias = q.categorias;
              this.categorias.forEach(r => {
                  this.itemsCat = r.items;
                  console.log(this.itemsCat);
                  this.itemNoExiste=true;
                  this.itemsCat.forEach(s => {
                    if(s.estatus === "Disponible")
                    {
                      this.items.forEach(item=>{
                            if(s.id === item.id)
                            {
                              this.itemNoExiste=false;
                            }
                      })
                      if(this.itemNoExiste)
                      {
                        this.items.push(s);
                        console.log(this.items);
                      }
                    }
                  })
              })
              console.log(this.categorias);            
          })
        }
          console.log(this.categorias);
        }
      )
    })

  }

  

 initCheckBox()
 {
  this.datosPartida.getItemsCarrito$().subscribe((data: IItem[])=>{
    console.log(data);
    this.itemsCarrito = data;
  })


  this.items.forEach(item=>{
    this.itemsCarrito.forEach(itemCarrito => 
      {
        if(item.id === itemCarrito.id)
        {
          item.checked=true;
        }
      })
  })
 }

  onCheckboxChange(e: any) {
  
    this.initCheckBox();
    console.log(e);
    console.log(e.currentTarget.defaultValue);

    if(e.currentTarget.checked)
    {
      this.items.forEach(item=>{
        if(item.id === e.currentTarget.defaultValue)
            {
              this.datosPartida.setItemCarrito(item);
            }
      })
    }
    else{
      this.datosPartida.unsetItemCarrito(e.currentTarget.defaultValue);
    }

  }

  
  
    
  submit(){
    
  }
  
  }
       
  