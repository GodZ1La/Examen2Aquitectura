export interface ISolicitudMaterial
{
    id: string,
    name: string,
    estatus: string,
    clase: string,
    descripcion: string,
    idItem: string,
    nameItem: string,
    idCategoria: string,
    nameCategoria: string,
    nameLote: string,
    cantidad: string,
    idProveedor: string,
    minimoNivel: string,
    items: IItem[];
  }


  export interface IItem
{
            id: string,
            name: string,
            estatus: string,
            clase: string,
            idItem: string,
            nameItem: string,
            idCategoria: string,
            nameCategoria: string,
            nameLote: string,
            cantidad: string,
            idPartida: string,
            idSubpartida: string,
			      namePartida: string,
            nameSubpartida: string,
            selected:boolean;
            checked:boolean;
  }

