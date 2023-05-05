import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaIngresoComponent } from './consulta-ingreso.component';

describe('ConsultaIngresoComponent', () => {
  let component: ConsultaIngresoComponent;
  let fixture: ComponentFixture<ConsultaIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
