import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodDonorComponent } from './update-blood-donor.component';

describe('UpdateBloodDonorComponent', () => {
  let component: UpdateBloodDonorComponent;
  let fixture: ComponentFixture<UpdateBloodDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBloodDonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBloodDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
