import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SellerDashboard } from './components/dashboard.page';
import { SellerProductDetails } from './components/product-details.page';
import { SellerProductEdit } from './components/product-edit.page';
import { SellerProductsCatalog } from './components/products-catalog.page';
import { SellerProductsList } from './components/products-list.page';
import { SellerProductAdd } from './components/product-add.page';


export const routes: Routes = [
  { path: 'seller/dashboard', component: SellerDashboard },
  { path: 'seller/product-details', component: SellerProductDetails },
  { path: 'seller/product-edit', component: SellerProductEdit },
  { path: 'seller/products-catalog', component: SellerProductsCatalog },
  { path: 'seller/products-list', component: SellerProductsList },
  { path: 'seller/products-add', component: SellerProductAdd }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    SellerDashboard,
    SellerProductDetails,
    SellerProductEdit,
    SellerProductsCatalog,
    SellerProductsList,
    SellerProductAdd
  ]

})

export class SellerModule { }
