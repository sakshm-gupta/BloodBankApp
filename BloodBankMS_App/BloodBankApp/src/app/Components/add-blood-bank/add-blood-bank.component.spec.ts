import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodBankComponent } from './add-blood-bank.component';

describe('AddBloodBankComponent', () => {
  let component: AddBloodBankComponent;
  let fixture: ComponentFixture<AddBloodBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
