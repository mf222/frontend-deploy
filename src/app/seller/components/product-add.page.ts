import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../shared/product.model';
import {ProductService} from '../../services/product-server.service';
declare var swal: any;


@Component({
  selector: 'cat-page',
  templateUrl: './product-add.html',
})

export class SellerProductAdd {
    @ViewChild('f') editform: NgForm;
    photo = '';
    name = '';
    texto = '';
    precio = 0;

    constructor (private  productService: ProductService ) {

    }

        
    onSubmit() { /* When the bottom is pressed, it creates a new product */
        const newProduct = new Product(this.name, this.precio, this.photo, this.texto);
        this.productService.addProduct(newProduct);
        swal({
            title: 'Agregado',
            text: 'Tu producto ' + this.name + ' ha sido agregado exitosamente.',
            type: "success",
            confirmButtonClass: "btn-success",
            confirmButtonText: "Ok"
        });

    }

    Remove_photo(event) {
        this.photo = '';
      }

}

