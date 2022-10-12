import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodDonationCampComponent } from './update-blood-donation-camp.component';

describe('UpdateBloodDonationCampComponent', () => {
  let component: UpdateBloodDonationCampComponent;
  let fixture: ComponentFixture<UpdateBloodDonationCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBloodDonationCampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBloodDonationCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
