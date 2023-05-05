import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisaPartidasComponent } from './modal-revisa-partidas.component';

describe('ModalRevisaPartidasComponent', () => {
  let component: ModalRevisaPartidasComponent;
  let fixture: ComponentFixture<ModalRevisaPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRevisaPartidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevisaPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
