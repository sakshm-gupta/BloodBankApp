import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodDonorComponent } from './view-blood-donor.component';

describe('ViewBloodDonorComponent', () => {
  let component: ViewBloodDonorComponent;
  let fixture: ComponentFixture<ViewBloodDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodDonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloodDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
