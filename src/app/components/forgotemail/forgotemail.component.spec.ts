import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotemailComponent } from './forgotemail.component';

describe('ForgotemailComponent', () => {
  let component: ForgotemailComponent;
  let fixture: ComponentFixture<ForgotemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotemailComponent]
    });
    fixture = TestBed.createComponent(ForgotemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
