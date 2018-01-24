import { TestBed, inject } from '@angular/core/testing';

import { TopoService } from './topo.service';

describe('TopoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopoService]
    });
  });

  it('should be created', inject([TopoService], (service: TopoService) => {
    expect(service).toBeTruthy();
  }));
});
