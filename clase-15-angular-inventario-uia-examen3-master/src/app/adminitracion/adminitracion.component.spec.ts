import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitracionComponent } from './adminitracion.component';

describe('AdminitracionComponent', () => {
  let component: AdminitracionComponent;
  let fixture: ComponentFixture<AdminitracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminitracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminitracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
