import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBajaComponent } from './consulta-baja.component';

describe('ConsultaBajaComponent', () => {
  let component: ConsultaBajaComponent;
  let fixture: ComponentFixture<ConsultaBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
