import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaMaterialComponent } from './entrega-material.component';

describe('EntregaMaterialComponent', () => {
  let component: EntregaMaterialComponent;
  let fixture: ComponentFixture<EntregaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
