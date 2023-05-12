import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNewSolicitudBajaComponent } from './items-new-solicitud-baja.component';

describe('ItemsNewSolicitudBajaComponent', () => {
  let component: ItemsNewSolicitudBajaComponent;
  let fixture: ComponentFixture<ItemsNewSolicitudBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNewSolicitudBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsNewSolicitudBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
