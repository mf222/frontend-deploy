import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product-server.service";
import {Product} from "../../shared/product.model";
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'cat-page',
  templateUrl: './products-list.html'
})

export class BuyerProductsList implements OnInit {

  private products: Product[] = new Array<Product>();

  constructor (private productService: ProductService){
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
    //this.products = this.productService.getProducts();

    $(function () {

      // Datatables
      $('#example1').DataTable({
        "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
        responsive: true,
        "autoWidth": false
      });

    })

  }

  GotoDetail(product: Product) {
    console.log(product);
    this.productService.currentProduct(product);
  }

}

