import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { ModalEditItemComponent } from '../modal-edit-item/modal-edit-item.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-modal-revisa-partidas',
  templateUrl: './modal-revisa-partidas.component.html',
  styleUrls: ['./modal-revisa-partidas.component.css']
})
export class ModalRevisaPartidasComponent {

  items: IItem[] = [];
  itemsCarrito: IItem[] = [];

  itemsEntregar: IItem[] = [];
  

  id:any;

  constructor(public dialog: MatDialog, private datosSolicitudMaterial: DatosService) 
  {
    this.id = this.datosSolicitudMaterial.getIdSolicitudMaterial();

    this.datosSolicitudMaterial.limpiaCarrito();
    this.datosSolicitudMaterial.limpiaEntregar();
    
    this.datosSolicitudMaterial.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>
    {
      console.log(data);

      data.forEach(p => {
        if(p.id === this.id)
        {
          this.items = p.items;
          console.log(this.items);
          this.datosSolicitudMaterial.setItemsCarrito(this.items);
        }
      })
    })
    
    

  }

  


 



  
 initCheckBox()
 {
    this.datosSolicitudMaterial.getItemsCarrito$().subscribe((data: IItem[])=>{
      console.log(data);
      this.itemsCarrito = data;
    })


  this.itemsCarrito.forEach(item=>{
    this.itemsEntregar.forEach(itemEntregar => 
      {
        if(item.id === itemEntregar.id)
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
              this.datosSolicitudMaterial.setItemEntregar(item);
            }
      })
    }
    else{
      this.datosSolicitudMaterial.unsetItemEntregar(e.currentTarget.defaultValue);
    }

  }

  

}
       
  