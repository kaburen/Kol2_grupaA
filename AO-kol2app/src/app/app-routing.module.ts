import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersAOComponent} from "./components/orders-ao/orders-ao.component";

const routes: Routes = [{
  path: '',
  component: OrdersAOComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
