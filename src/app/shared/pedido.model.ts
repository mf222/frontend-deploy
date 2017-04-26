import {Product} from '../shared/product.model';

export class Pedido {/* A product with its quantity */
    constructor(public producto: Product, public cantidad: number) {}
}

//The "order" will be a list of "pedidos"
