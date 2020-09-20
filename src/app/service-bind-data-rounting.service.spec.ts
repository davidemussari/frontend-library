import { TestBed, inject } from '@angular/core/testing';

import { ServiceBindDataRountingService } from './service-bind-data-rounting.service';

describe('ServiceBindDataRountingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceBindDataRountingService]
    });
  });

  it('should be created', inject([ServiceBindDataRountingService], (service: ServiceBindDataRountingService) => {
    expect(service).toBeTruthy();
  }));
});
