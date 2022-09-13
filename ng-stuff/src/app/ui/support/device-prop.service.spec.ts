import { TestBed } from '@angular/core/testing';

import { DevicePropService } from './device-prop.service';

describe('SizeService', () => {
  let service: DevicePropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicePropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
