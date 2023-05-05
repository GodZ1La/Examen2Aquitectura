import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubpartidasComponent } from './modal-subpartidas.component';

describe('ModalSubpartidasComponent', () => {
  let component: ModalSubpartidasComponent;
  let fixture: ComponentFixture<ModalSubpartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubpartidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSubpartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
