import { TestBed } from '@angular/core/testing';

import { ServicesfirebaseService } from './servicesfirebase.service';

describe('ServicesfirebaseService', () => {
  let service: ServicesfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
