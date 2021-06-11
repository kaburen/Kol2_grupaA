import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemAOComponent } from './orders-item-ao.component';

describe('OrdersItemAOComponent', () => {
  let component: OrdersItemAOComponent;
  let fixture: ComponentFixture<OrdersItemAOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemAOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
