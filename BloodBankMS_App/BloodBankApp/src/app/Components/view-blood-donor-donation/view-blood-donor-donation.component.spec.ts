import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodDonorDonationComponent } from './view-blood-donor-donation.component';

describe('ViewBloodDonorDonationComponent', () => {
  let component: ViewBloodDonorDonationComponent;
  let fixture: ComponentFixture<ViewBloodDonorDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodDonorDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloodDonorDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
