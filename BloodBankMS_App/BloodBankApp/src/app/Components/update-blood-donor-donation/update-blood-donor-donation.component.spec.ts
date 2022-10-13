import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodDonorDonationComponent } from './update-blood-donor-donation.component';

describe('UpdateBloodDonorDonationComponent', () => {
  let component: UpdateBloodDonorDonationComponent;
  let fixture: ComponentFixture<UpdateBloodDonorDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBloodDonorDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBloodDonorDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
