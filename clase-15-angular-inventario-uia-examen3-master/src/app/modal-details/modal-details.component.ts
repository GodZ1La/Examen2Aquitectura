import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { ModalEditItemComponent } from '../modal-edit-item/modal-edit-item.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent {

  items: IItem[] | undefined;

  id:any;

  constructor(public dialog: MatDialog, private datosSolicitudMaterial: DatosService) 
  {
    this.id = this.datosSolicitudMaterial.getIdSolicitudMaterial();
    this.datosSolicitudMaterial.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
      console.log(data);

      data.forEach(p => {
        if(p.id === this.id)
        {
          this.items = p.items;
          console.log(this.items);
        }
      })
    })
    
    

  }

              
  ngOnInit(): void 
  {
    
  this.id = this.datosSolicitudMaterial.getIdSolicitudMaterial();
  this.datosSolicitudMaterial.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
    console.log(data);

    data.forEach(p => {
      if(p.id === this.id)
      {
        this.items = p.items;
        console.log(this.items);
      }
    })
  })
}
  
  

  openDialogItemEdit() {
    const dialogRef = this.dialog.open(ModalEditItemComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  }


