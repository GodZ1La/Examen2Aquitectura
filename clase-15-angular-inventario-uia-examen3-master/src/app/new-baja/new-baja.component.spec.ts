import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBajaComponent } from './new-baja.component';

describe('NewBajaComponent', () => {
  let component: NewBajaComponent;
  let fixture: ComponentFixture<NewBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
