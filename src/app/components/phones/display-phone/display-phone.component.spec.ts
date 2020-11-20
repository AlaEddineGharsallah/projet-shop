import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPhoneComponent } from './display-phone.component';

describe('DisplayPhoneComponent', () => {
  let component: DisplayPhoneComponent;
  let fixture: ComponentFixture<DisplayPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
