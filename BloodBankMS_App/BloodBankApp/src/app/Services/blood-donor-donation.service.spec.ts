import { TestBed } from '@angular/core/testing';

import { BloodDonorDonationService } from './blood-donor-donation.service';

describe('BloodDonorDonationService', () => {
  let service: BloodDonorDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonorDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
