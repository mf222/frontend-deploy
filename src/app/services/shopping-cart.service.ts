import {Product} from '../shared/product.model';
import {Pedido} from '../shared/pedido.model';
import {find} from "rxjs/operator/find";
import {forEach} from "@angular/router/src/utils/collection";

export class ShoppingCartService {

    constructor() { }

    private carrito: Pedido[] = []; //Each "pedido" is a product with its quantity 

    getCart(){ /* Returns the cart */
        return this.carrito.slice();
    }

    addProduct(product: Product) { /* Adds the given product to the cart */

        let carro = this.carrito.filter((pe: Pedido) => {
            return pe.producto == product;
        });

        if (carro.length == 0) { //If its a new product
            this.carrito.push(new Pedido(product, 1));
        }
        else { //If the cart had the product before, it adds one to the amount
            let valor = carro[0];
            this.carrito[this.carrito.indexOf(valor)].cantidad += 1;
        }

    }
}
