import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product-server.service';
import {Product} from '../../shared/product.model';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './product-details.html'
})

export class BuyerProductDetails implements OnInit {
  current_product: Product = new Product('Silla estilo sims', 189000, 'assets/modules/ecommerce/common/img/001.jpg', '' +
      'A chair is a piece of furniture with a raised surface, commonly used to seat a single person.');

  constructor (private  productService: ProductService ) {
  }
  ngOnInit() {
    this.current_product = this.productService.current_product;

    $(function () {

      // Heart toggle
      $('.cat__ecommerce__catalog__item__like').on('click', function(){
        $(this).toggleClass('cat__ecommerce__catalog__item__like--selected')
      });

      // Active photo toggle
      $('.cat__ecommerce__product__photos-item').on('click', function(){
        $('#targetPhoto').attr('src', $(this).find('img').attr('src'));
        $('.cat__ecommerce__product__photos-item').removeClass('cat__ecommerce__product__photos-item--active');
        $(this).addClass('cat__ecommerce__product__photos-item--active')
      });

      // Tooltip
      $("[data-toggle=tooltip]").tooltip();

      // Select 2
      $('.select2').select2();

    });

  }
}

