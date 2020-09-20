import { TestBed, inject } from '@angular/core/testing';

import { DeweyService } from './dewey.service';

describe('DeweyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeweyService]
    });
  });

  it('should be created', inject([DeweyService], (service: DeweyService) => {
    expect(service).toBeTruthy();
  }));
});
