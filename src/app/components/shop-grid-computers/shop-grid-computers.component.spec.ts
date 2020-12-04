import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridComputersComponent } from './shop-grid-computers.component';

describe('ShopGridComputersComponent', () => {
  let component: ShopGridComputersComponent;
  let fixture: ComponentFixture<ShopGridComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridComputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
