import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartidasComponent } from './modal-partidas.component';

describe('ModalPartidasComponent', () => {
  let component: ModalPartidasComponent;
  let fixture: ComponentFixture<ModalPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
