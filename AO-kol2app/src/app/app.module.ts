import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersAOComponent } from './components/orders-ao/orders-ao.component';
import { OrdersItemAOComponent } from './components/orders-item-ao/orders-item-ao.component';
import { OrdersDetailsAOComponent } from './components/orders-details-ao/orders-details-ao.component';
import {DataService} from "./services/ao-data.service";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    OrdersAOComponent,
    OrdersItemAOComponent,
    OrdersDetailsAOComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
