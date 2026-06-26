import { Component } from '@angular/core';




export interface Product{
  id: number;
  discription: string;
  price: number;
  url: string;


}

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}
