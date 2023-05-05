import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSolicitudEntregadaComponent } from './consulta-solicitud-entregada.component';

describe('ConsultaSolicitudEntregadaComponent', () => {
  let component: ConsultaSolicitudEntregadaComponent;
  let fixture: ComponentFixture<ConsultaSolicitudEntregadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSolicitudEntregadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSolicitudEntregadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
