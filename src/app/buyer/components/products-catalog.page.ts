import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/product.model';
import {ProductService} from '../../services/product-server.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './products-catalog.html',
})

export class BuyerProductsCatalog implements OnInit {

  products: Product[];

  constructor (private  productService: ProductService ) {
  }


  ngOnInit() { //When Init, obtains the products from the server and subcribes itself to any change on the products. 

    //this.products = this.productService.getProducts();
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
    GotoDetail(product: Product) { //Obtains the details of the given product
        this.productService.currentProduct(product);
    }
}
