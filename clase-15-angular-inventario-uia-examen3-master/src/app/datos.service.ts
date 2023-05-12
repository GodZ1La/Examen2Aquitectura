import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IIngreso, IPartida } from './IPartida';
import { IItem, ISolicitudMaterial } from './ISolicitudMaterial';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DatosService {
 
  
  
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  partidasUrl = "http://localhost:8080/inventario/Partidas";
  solicitudesArchivoURL: string = '/assets/solicitudesMaterial.json';
  solicitudesUrl = "http://localhost:8080/inventario/SolicitudMaterial";
  solicitudesEntregadasUrl = "http://localhost:8080/inventario/SolicitudEntrega";
  
  private idSolicitud: string = "";
  private idSolicitud$ = new BehaviorSubject<string>("");


  private idSolicitudEntregada: string = "";
  private idSolicitudEntregada$ = new BehaviorSubject<string>("");


  private idPartida: string = "";
  private idPartida$ = new BehaviorSubject<string>("");

  private idSubpartida: string = "";
  private idSubpartida$ = new BehaviorSubject<string>("");

  private idCategoria: string = "";
  private idCategoria$ = new BehaviorSubject<string>("");

  private solicitudesMaterial = new Observable<ISolicitudMaterial[]>();
  private partidas = new Observable<IPartida[]>();


  private itemsCarrito: IItem[] = [];
  private itemsCarrito$ = new BehaviorSubject<IItem[]>([]);


  private itemsEntregar: IItem[] = [];
  private itemsEntregar$ = new BehaviorSubject<IItem[]>([]);

  private itemsBaja: IItem[] = [];
  private itemsBaja$ = new BehaviorSubject<IItem[]>([]);

  constructor(private http: HttpClient) 
  {     
    this.idSolicitud = ""   
  }
 
  getSolicitudesMaterial(): Observable<ISolicitudMaterial[]> {
    this.solicitudesMaterial = this.http.get<ISolicitudMaterial[]>(this.solicitudesUrl);
    return this.solicitudesMaterial;    
  }

  
  setIdSolicitud(id:string)
  {
    this.idSolicitud=id;
    this.idSolicitud$.next(this.idSolicitud);;
  }


  setIdSolicitudEntregada(id:string)
  {
    this.idSolicitudEntregada=id;
    this.idSolicitudEntregada$.next(this.idSolicitudEntregada);;
  }

  
  setIdPartida(id:string)
  {
    this.idPartida=id;
    this.idPartida$.next(this.idPartida);;
  }

  setIdSubpartida(id:string)
  {
    this.idSubpartida=id;
    this.idSubpartida$.next(this.idSubpartida);;
  }
  
  setIdCategoria(id:string)
  {
    this.idCategoria=id;
    this.idCategoria$.next(this.idCategoria);;
  }
  
    
  getIdSolicitudMaterial(): string {
    return this.idSolicitud;
  } 

  getIdSolicitudMaterialEntregada(): string {
    return this.idSolicitudEntregada;
  } 
  

  getIdPartida(): string {
    return this.idPartida;
  }

  getIdSubpartida(): string {
    return this.idSubpartida;
  }
  getIdCategoria(): string {
    return this.idCategoria;
  }


  setItemCarrito(item:IItem)
  {
    this.itemsCarrito.push(item);
    this.itemsCarrito$.next(this.itemsCarrito);
  }


  unsetItemCarrito(id: string) 
  {
    let newItemsCarrito: IItem[] = [];
    this.itemsCarrito$ = new BehaviorSubject<IItem[]>([]);
    this.itemsCarrito.forEach(p=>
      {
        if(id !== p.id)
          newItemsCarrito.push(p);
      })
    this.itemsCarrito=newItemsCarrito;
    this.itemsCarrito$.next(this.itemsCarrito);
  }

  limpiaCarrito() 
  {
    let newItemsCarrito: IItem[] = [];
    this.itemsCarrito = newItemsCarrito;
    this.itemsCarrito$ = new BehaviorSubject<IItem[]>([]);
  }

  setItemsCarrito(items: IItem[]) 
  {
    this.itemsCarrito = items;
    this.itemsCarrito$ = new BehaviorSubject<IItem[]>([]);
    this.itemsCarrito$.next(this.itemsCarrito);

  }

  getItemsCarrito$(): Observable<IItem[]> {
    return this.itemsCarrito$;    
  }

  getItemsCarrito(): IItem[] 
  {
    return this.itemsCarrito;    
  }

  




  setItemBaja(item:IItem)
  {
    this.itemsBaja.push(item);
    this.itemsBaja$.next(this.itemsBaja);
  }


  unsetItemBaja(id: string) 
  {
    let newItemsBaja: IItem[] = [];
    this.itemsBaja$ = new BehaviorSubject<IItem[]>([]);
    this.itemsBaja.forEach(p=>
      {
        if(id !== p.id)
          newItemsBaja.push(p);
      })
    this.itemsBaja=newItemsBaja;
    this.itemsBaja$.next(this.itemsBaja);
  }

  limpiaBaja() 
  {
    let newItemsBaja: IItem[] = [];
    this.itemsBaja = newItemsBaja;
    this.itemsBaja$ = new BehaviorSubject<IItem[]>([]);
  }

  setItemsBaja(items: IItem[]) 
  {
    this.itemsBaja = items;
    this.itemsBaja$ = new BehaviorSubject<IItem[]>([]);
    this.itemsBaja$.next(this.itemsBaja);

  }

  getItemsBaja$(): Observable<IItem[]> {
    return this.itemsBaja$;    
  }

  getItemsBaja(): IItem[] 
  {
    return this.itemsBaja;    
  }



  setItemEntregar(item:IItem)
  {
    this.itemsEntregar.push(item);
    this.itemsEntregar$.next(this.itemsEntregar);
  }


  unsetItemEntregar(id: string) 
  {
    let newItemsEntregar: IItem[] = [];
    this.itemsEntregar$ = new BehaviorSubject<IItem[]>([]);
    this.itemsEntregar.forEach(p=>
      {
        if(id !== p.id)
          newItemsEntregar.push(p);
      })
    this.itemsEntregar=newItemsEntregar;
    this.itemsEntregar$.next(this.itemsEntregar);
  }



  getItemsEntregar$(): Observable<IItem[]> {
    return this.itemsEntregar$;    
  }


  limpiaEntregar() 
  {
    let newItemsEntregar: IItem[] = [];
    this.itemsEntregar = newItemsEntregar;
    this.itemsEntregar$ = new BehaviorSubject<IItem[]>([]);
  }

  getItemsEntregar(): IItem[] 
  {
    return this.itemsEntregar;    
  }



  public getPartidas()
  {
       return this.http.get<IPartida[]>(this.partidasUrl)
      .pipe(
        tap(_ => console.log('extrayendo Partidas')),
      catchError(this.handleError<IPartida[]>('loadPartidas', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {      
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead      
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);      
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** POST: add a new Ingreso to the server */
public agregaIngreso(Ingreso: IIngreso): Observable<IIngreso>  {
  return this.http.post<IIngreso>(this.partidasUrl, Ingreso, this.httpOptions).pipe(
    tap((newIngreso: IIngreso) => console.log(`added Ingreso w/ name=${newIngreso.name}`)),
    catchError(this.handleError<IIngreso>('addIngreso'))
  );
}


enviaNewSolicitud(solicitud:ISolicitudMaterial): Observable<ISolicitudMaterial> 
{
  return this.http.post<ISolicitudMaterial>(this.solicitudesUrl, solicitud, this.httpOptions).pipe(
    tap((newSolicitudMaterial: ISolicitudMaterial) => console.log(`added SolicitudMaterial w/ name=${newSolicitudMaterial}`)),
    catchError(this.handleError<ISolicitudMaterial>('addSolicitudMaterial'))
  );
  
  
}



enviaNewSolicitudEntregada(solicitud:ISolicitudMaterial): Observable<ISolicitudMaterial> 
{
  return this.http.post<ISolicitudMaterial>(this.solicitudesEntregadasUrl, solicitud, this.httpOptions).pipe(
    tap((newSolicitudMaterialEntregada: ISolicitudMaterial) => console.log(`added SolicitudMaterialEntregada w/ name=${newSolicitudMaterialEntregada}`)),
    catchError(this.handleError<ISolicitudMaterial>('addSolicitudMaterialEntregada'))
  );
  
  
}



    /** POST: add a new Ingreso to the server */
    public agregaPartida(Partida: IPartida): Observable<IPartida>  {
      return this.http.post<IPartida>(this.partidasUrl, Partida, this.httpOptions).pipe(
        tap((newPartida: IPartida) => console.log(`added Partida w/ name=${newPartida.name}`)),
        catchError(this.handleError<IPartida>('addPartida'))
      );
    }

}