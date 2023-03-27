import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routs: Routes = [
  {path: '', component: ShopComponent},
  {path: ':id', component: ProductDetailsComponent, data: {breadcrumb: {alias: 'productDetails'}}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routs)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {

}
