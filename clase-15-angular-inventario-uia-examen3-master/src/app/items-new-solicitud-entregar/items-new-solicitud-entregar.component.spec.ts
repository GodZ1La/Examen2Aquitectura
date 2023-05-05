import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNewSolicitudEntregarComponent } from './items-new-solicitud-entregar.component';

describe('ItemsNewSolicitudEntregarComponent', () => {
  let component: ItemsNewSolicitudEntregarComponent;
  let fixture: ComponentFixture<ItemsNewSolicitudEntregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNewSolicitudEntregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsNewSolicitudEntregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
