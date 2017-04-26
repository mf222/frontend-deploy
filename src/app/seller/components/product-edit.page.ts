import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../services/product-server.service';
import {Product} from '../../shared/product.model';
declare var swal: any;

@Component({
  selector: 'cat-page',
  templateUrl: './product-edit.html',
})

export class SellerProductEdit {
    @ViewChild('f') editform: NgForm;
    photo = '';
    name = '';
    texto = '';
    precio = 0;
    products: Product[];
    selected_product = new Product('', 0, '', '' );

    constructor (private  productService: ProductService ) {
    }
    ngOnInit() {
        //this.products = this.productService.getProducts();
        this.productService.productChanged.subscribe(
            (products: Product[]) => {
                this.products = products;
            }
        );
    }
    onSubmit() {
        const newProduct = new Product(this.name, this.precio, this.photo, this.texto);
        this.productService.editProduct(this.selected_product , newProduct);
        swal({
            title: 'Editado',
            text: 'Tu producto ' + this.name + 'ha sido editado exitosamente.',
            type: "success",
            confirmButtonClass: "btn-success",
            confirmButtonText: "Ok"
        });
    }

    Remove_photo() {
      this.photo = '';
    }

    changeSelection() {
        this.name = this.selected_product.name;
        this.texto = this.selected_product.description;
        this.precio = this.selected_product.price;
        this.photo = this.selected_product.photo;
    }

    eraseProduct() {
        this.productService.deleteProduct(this.selected_product);
        this.photo = '';
        this.name = '';
        this.texto = '';
        this.precio = 0;
    }
}
