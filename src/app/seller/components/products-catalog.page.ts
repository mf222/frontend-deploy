import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/product.model';
import {ProductService} from '../../services/product-server.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './products-catalog.html',
  providers: [ProductService]
})

export class SellerProductsCatalog implements OnInit {

  private products: Product[] = new Array<Product>();

  constructor (private  productService: ProductService ) {
  }

  getProducts(): void{
    this.productService.getProducts()
      .then(myProducts => {
        console.log(myProducts);
        this.products = myProducts;
      })
  }

  ngOnInit() {



    this.getProducts();
    this.productService.productChanged.subscribe(
        (products: Product[]) => {
            this.products = products;
        }
    );

    $(function () {

      $('.cat__ecommerce__catalog__item__like').on('click', function(){
        $(this).toggleClass('cat__ecommerce__catalog__item__like--selected');
      });

      $('[data-toggle=tooltip]').tooltip();

    });

  }
  GotoDetail(product: Product) {
    console.log(product);
    this.productService.currentProduct(product);
  }
}
