import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridPhonesComponent } from './shop-grid-phones.component';

describe('ShopGridPhonesComponent', () => {
  let component: ShopGridPhonesComponent;
  let fixture: ComponentFixture<ShopGridPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
