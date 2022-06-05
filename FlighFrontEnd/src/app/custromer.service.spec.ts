import { TestBed } from '@angular/core/testing';

import { CustromerService } from './custromer.service';

describe('CustromerService', () => {
  let service: CustromerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustromerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
