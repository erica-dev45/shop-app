import { Product } from './../../models/product/product';
import { Component, input,output } from '@angular/core';



@Component({
  selector: 'app-product-items',
  imports: [],
  templateUrl: './product-items.html',
  styleUrl: './product-items.css',
})
export class ProductItems {


product = input.required <Product>();

displayProductViewModal = output<Product>();
onProductClick(){
  this.displayProductViewModal.emit(this.product());
}

productClicked = output<Product>();


}

