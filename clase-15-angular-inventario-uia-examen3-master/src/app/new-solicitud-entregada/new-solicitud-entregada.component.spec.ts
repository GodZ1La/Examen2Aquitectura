import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolicitudEntregadaComponent } from './new-solicitud-entregada.component';

describe('NewSolicitudEntregadaComponent', () => {
  let component: NewSolicitudEntregadaComponent;
  let fixture: ComponentFixture<NewSolicitudEntregadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSolicitudEntregadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSolicitudEntregadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
