import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonationCampComponent } from './add-blood-donation-camp.component';

describe('AddBloodDonationCampComponent', () => {
  let component: AddBloodDonationCampComponent;
  let fixture: ComponentFixture<AddBloodDonationCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDonationCampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBloodDonationCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
