import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/ao-data.service";

@Component({
  selector: 'app-orders-ao',
  templateUrl: './orders-ao.component.html',
  styleUrls: ['./orders-ao.component.css']
})
export class OrdersAOComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
