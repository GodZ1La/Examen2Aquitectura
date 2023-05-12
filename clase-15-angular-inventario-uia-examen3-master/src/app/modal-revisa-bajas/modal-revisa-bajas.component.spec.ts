import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisaBajasComponent } from './modal-revisa-bajas.component';

describe('ModalRevisaBajasComponent', () => {
  let component: ModalRevisaBajasComponent;
  let fixture: ComponentFixture<ModalRevisaBajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRevisaBajasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevisaBajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
