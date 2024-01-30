import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentdetailComponent } from './car-rentdetail.component';

describe('CarRentdetailComponent', () => {
  let component: CarRentdetailComponent;
  let fixture: ComponentFixture<CarRentdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarRentdetailComponent]
    });
    fixture = TestBed.createComponent(CarRentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
