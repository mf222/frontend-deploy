import {Component, Injector} from '@angular/core';

@Component({
  selector: 'product-in-catalog',
  template: `
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
      <div class="cat__ecommerce__catalog__item">
          <div class="cat__ecommerce__catalog__item__img">
              <div class="cat__ecommerce__catalog__item__like cat__ecommerce__catalog__item__like--selected">
                  <i class="icmn-heart"><!-- --></i>
              </div>
              <a href="javascript: void(0);">
                  <img src="assets/modules/ecommerce/common/img/003.jpg" />
              </a>
          </div>
          <div class="cat__ecommerce__catalog__item__title">
              <a href="javascript: void(0);">Manroad Glasses</a>
              <div class="cat__ecommerce__catalog__item__price">
                  $199.00
              </div>
          </div>
          <div class="cat__ecommerce__catalog__item__descr">
              <div class="cat__ecommerce__catalog__item__descr__sizes">
                  <span data-toggle="tooltip" data-placement="right" title="Size S">S</span>
                  <span data-toggle="tooltip" data-placement="right" title="Size M">M</span>
                  <span data-toggle="tooltip" data-placement="right" title="Size XL">XL</span>
              </div>
              Including Lenses
          </div>
      </div>
  </div>
  `,
})
export default class ProductComponent {
  title= 'Producto';
  price= '$1000';
  salePrice= '$990';
  description= 'Lorem Ipsum dolor sit amet.';
  photo= '';


  constructor(private injector: Injector) {
    this.title = this.injector.get('title');
  }
}
