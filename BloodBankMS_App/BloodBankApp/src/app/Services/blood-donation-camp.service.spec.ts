import { TestBed } from '@angular/core/testing';

import { BloodDonationCampService } from './blood-donation-camp.service';

describe('BloodDonationCampService', () => {
  let service: BloodDonationCampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodDonationCampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
