import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodBankComponent } from './view-blood-bank.component';

describe('ViewBloodBankComponent', () => {
  let component: ViewBloodBankComponent;
  let fixture: ComponentFixture<ViewBloodBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
