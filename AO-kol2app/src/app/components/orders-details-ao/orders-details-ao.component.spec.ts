import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsAOComponent } from './orders-details-ao.component';

describe('OrdersDetailsAOComponent', () => {
  let component: OrdersDetailsAOComponent;
  let fixture: ComponentFixture<OrdersDetailsAOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsAOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
