import { ProductItems } from './../product-items/product-items';
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product/product';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItems, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class Productlist {
  products:  Product[] = [
    {id:  1, price: 45000, discription: 'Dress',url:'../assets/images/product1.png'},
    {id:  2, discription: 'DressfrontView', price: 45000,url:'../assets/images/product2.png'},
    {id:  3, discription: 'Modern Wear', price: 45000,url:'../assets/images/product3.png'},
    {id:  4, discription: 'Modern Wear', price: 45000,url:'../assets/images/product4.png'},
    {id:  5, discription: 'Modern Wear', price: 45000,url:'../assets/images/product5.png'},
    {id:  6, discription: 'Modern Wear', price: 45000,url:'../assets/images/product6.png'},
    {id:  4, discription: 'Modern Wear', price: 45000,url:'../assets/images/product7.png'},
    {id:  4, discription: 'Modern Wear', price: 45000,url:'../assets/images/product8.png'}





    
    


  ]
}
