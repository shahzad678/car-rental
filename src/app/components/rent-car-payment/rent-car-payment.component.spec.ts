import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCarPaymentComponent } from './rent-car-payment.component';

describe('RentCarPaymentComponent', () => {
  let component: RentCarPaymentComponent;
  let fixture: ComponentFixture<RentCarPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentCarPaymentComponent]
    });
    fixture = TestBed.createComponent(RentCarPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
