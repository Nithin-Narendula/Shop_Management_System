import { TestBed } from '@angular/core/testing';

import { CustledgService } from './custledg.service';

describe('CustledgService', () => {
  let service: CustledgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustledgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
