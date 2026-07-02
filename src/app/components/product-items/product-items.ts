import { Product } from './../../models/product/product';
import { Component, input,output } from '@angular/core';



@Component({
  selector: 'app-product-items',
  imports: [],
  templateUrl: './product-items.html',
  styleUrl: './product-items.css',
})
export class ProductItems {
// product = input<Product>();

product = input.required <Product>();

productClicked = output<Product>();
onProductClick(){
  this.productClicked.emit(this.product());

}
}
