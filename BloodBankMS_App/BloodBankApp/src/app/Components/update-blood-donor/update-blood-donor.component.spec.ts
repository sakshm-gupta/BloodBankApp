import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblooddonorComponent } from './update-blood-donor.component';

describe('UpdateBloodDonorComponent', () => {
  let component: UpdateblooddonorComponent;
  let fixture: ComponentFixture<UpdateblooddonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblooddonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateblooddonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
