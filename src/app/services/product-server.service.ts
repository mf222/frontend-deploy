import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import {EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  productChanged  =  new EventEmitter<Product[]>();
  selectedProduct =  new EventEmitter<Product>();

  private products: Product[] = [

    new Product(
      'Pan de pascua',
      5000,
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPcd6olm2FMFKbviEPyYvNEAqsccCVts1g6aeTqDhBp0C9yiFRZw',
      'un riquin pan de pascua'
     )
  ];

  public current_product = new Product('Silla estilo sims', 189000, 'assets/modules/ecommerce/common/img/001.jpg', '' +
      'A chair is a piece of furniture with a raised surface, commonly used to seat a single person.'
  );


  private url = 'http://www.mocky.io/v2/58fe49090f0000241a08ba82';  // URL to web api

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {

    return this.http
               //.get(`server/api/v2/users/${type}/${id}`)
               .get(this.url)
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addProduct(product: Product) { /*Adds the given product to the list of products */
    this.products.push(product);
    console.log(this.products);
    this.productChanged.emit(this.products.slice());
  }

  editProduct(product_old: Product, product_new: Product) { /*Changes the list of products, deleting the old one and adding the new one*/
    this.products[this.products.indexOf(product_old)] = product_new;
    this.productChanged.emit(this.products.slice());
  }

  currentProduct(product: Product ) { 
    this.current_product  = product;
  }

  deleteProduct(product: Product) {/* Deletes the given product  */
    this.products = this.products.filter((value) => value !== product);
  }

}
