import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAOComponent } from './orders-ao.component';

describe('OrdersAOComponent', () => {
  let component: OrdersAOComponent;
  let fixture: ComponentFixture<OrdersAOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
