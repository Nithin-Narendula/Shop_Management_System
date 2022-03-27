import { TestBed } from '@angular/core/testing';

import { SuppledgService } from './suppledg.service';

describe('SuppledgService', () => {
  let service: SuppledgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppledgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
