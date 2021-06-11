import { TestBed } from '@angular/core/testing';

import { AODataService } from './ao-data.service';

describe('AODataService', () => {
  let service: AODataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AODataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
