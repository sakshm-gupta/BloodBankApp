import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationCampComponent } from './blood-donation-camp.component';

describe('BloodDonationCampComponent', () => {
  let component: BloodDonationCampComponent;
  let fixture: ComponentFixture<BloodDonationCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonationCampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonationCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
