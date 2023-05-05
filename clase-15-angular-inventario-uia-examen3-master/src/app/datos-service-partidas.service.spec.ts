import { TestBed } from '@angular/core/testing';

import { DatosServicePartidasService } from './datos-service-partidas.service';

describe('DatosServicePartidasService', () => {
  let service: DatosServicePartidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosServicePartidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
