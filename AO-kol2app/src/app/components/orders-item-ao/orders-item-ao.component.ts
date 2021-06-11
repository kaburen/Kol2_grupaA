import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-ao',
  templateUrl: './orders-item-ao.component.html',
  styleUrls: ['./orders-item-ao.component.css']
})
export class OrdersItemAOComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
