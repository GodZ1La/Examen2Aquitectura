import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartidaComponent } from './new-partida.component';

describe('NewPartidaComponent', () => {
  let component: NewPartidaComponent;
  let fixture: ComponentFixture<NewPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
