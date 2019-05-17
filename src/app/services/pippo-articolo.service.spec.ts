import { TestBed } from '@angular/core/testing';

import { PippoArticoloService } from './pippo-articolo.service';

describe('PippoArticoloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PippoArticoloService = TestBed.get(PippoArticoloService);
    expect(service).toBeTruthy();
  });
});
