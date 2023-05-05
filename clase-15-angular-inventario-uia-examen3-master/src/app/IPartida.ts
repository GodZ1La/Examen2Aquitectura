import { IItem } from "./ISolicitudMaterial";


export interface IIngreso 
{
			idPartida: string,
      name: string,
      idSubpartida: string,
      nameSubpartida: string,
      idCategoria: string,
      nameCategoria: string,
      clase: string,
      cantidad: string,
      estatus: string,
      idProveedor: string; 
  }

  

export interface IPartida 
{
			id: string,
			idPartida: string,
            name: string,
            idSubpartida: string,
            nameSubpartida: string,
            idCategoria: string,
            nameCategoria: string,
            nameLote: string,
            cantidad: number,
            minimoNivel: number,
            idProveedor: string,
            estatus: string,
            selected:boolean,
            checked:boolean,
            subpartidas: ISubpartida[]; 
  }

export interface ISubpartida 
{
			id: string,
			idPartida: string,
            name: string,
            idSubpartida: string,
            nameSubpartida: string,
            idCategoria: string,
            nameCategoria: string,
            nameLote: string,
            cantidad: number,
            minimoNivel: number,
            idProveedor: string
            categorias: ICategoria[]; 
  }

export interface ICategoria 
{
			id: string,
			idPartida: string,
            name: string,
            idSubpartida: string,
            nameSubpartida: string,
            idCategoria: string,
            nameCategoria: string,
            nameLote: string,
            cantidad: number,
            minimoNivel: number,
            idProveedor: string
            items: IItem[]; 
  }