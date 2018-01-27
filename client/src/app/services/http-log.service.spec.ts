import { TestBed, inject } from '@angular/core/testing';

import { HttpLogService } from './http-log.service';

describe('HttpLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLogService]
    });
  });

  it('should be created', inject([HttpLogService], (service: HttpLogService) => {
    expect(service).toBeTruthy();
  }));
});
