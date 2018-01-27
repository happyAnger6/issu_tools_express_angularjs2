import { TestBed, inject } from '@angular/core/testing';

import { HttpLogBackendService } from './http-log-backend.service';

describe('HttpLogBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLogBackendService]
    });
  });

  it('should be created', inject([HttpLogBackendService], (service: HttpLogBackendService) => {
    expect(service).toBeTruthy();
  }));
});
