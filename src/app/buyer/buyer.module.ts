import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { BuyerCartCheckout } from './components/cart-checkout.page';
import { BuyerDashboard } from './components/dashboard.page';
import { BuyerOrders } from './components/orders.page';
import { BuyerProductDetails } from './components/product-details.page';
import { BuyerProductsCatalog } from './components/products-catalog.page';
import { BuyerProductsList } from './components/products-list.page';


export const routes: Routes = [
  { path: 'buyer/cart-checkout', component: BuyerCartCheckout },
  { path: 'buyer/dashboard', component: BuyerDashboard },
  { path: 'buyer/orders', component: BuyerOrders },
  { path: 'buyer/product-details', component: BuyerProductDetails },
  { path: 'buyer/products-catalog', component: BuyerProductsCatalog },
  { path: 'buyer/products-list', component: BuyerProductsList },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    BuyerCartCheckout,
    BuyerDashboard,
    BuyerOrders,
    BuyerProductDetails,
    BuyerProductsCatalog,
    BuyerProductsList,
  ]

})

export class BuyerModule { }
