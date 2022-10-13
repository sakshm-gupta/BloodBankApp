import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonorDonationComponent } from './add-blood-donor-donation.component';

describe('AddBloodDonorDonationComponent', () => {
  let component: AddBloodDonorDonationComponent;
  let fixture: ComponentFixture<AddBloodDonorDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDonorDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBloodDonorDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
