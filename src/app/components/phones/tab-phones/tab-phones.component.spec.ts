import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPhonesComponent } from './tab-phones.component';

describe('TabPhonesComponent', () => {
  let component: TabPhonesComponent;
  let fixture: ComponentFixture<TabPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
