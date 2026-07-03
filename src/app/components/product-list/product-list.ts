import { Product } from './../../models/product/product';
import { ProductItems } from './../product-items/product-items';
import { Component, output, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { ModalProductView } from "../modal-product-view/modal-product-view";



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItems, CurrencyPipe, UpperCasePipe, JsonPipe, DatePipe, ModalProductView],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class Productlist {

  products = signal<Product[]>([
    {
      id: 1,
      name: 'Dress',
      description: 'Tissee a la main, faits au caeroun',
      soldPrice: 22000,
      regularPrice: 28000,
      imageUrl: '../assets/images/product1.png',
      createdAt: new Date('2026-01-15'),
      categories: ['vetements', 'femme', 'traditionnel'],

    },
    {
      id: 2,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product2.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },

    {
      id: 3,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product3.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },

    {
      id: 4,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product4.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },
    {
      id: 5,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product5.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },

    {
      id: 6,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product6.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },

    {
      id: 7,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product7.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },
    {
      id: 8,
      name: 'Sac en raphia',
      description: ' Tresse en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      imageUrl: '../assets/images/product8.png',
      createdAt: new Date('2026-02-10'),
      categories: ['accessoires', 'artisanat'],
    },




  ])

  favorites = signal<Product[]>([]);
  isDisplayModal = signal(false);
  modalProduct = signal<Product | undefined>(undefined);

  onDisplayProductViewModal(product: Product) {
    this.modalProduct.set(product);
    this.isDisplayModal.set(true);
  }

  onCloseModal() {
    this.modalProduct.set(undefined);
    this.isDisplayModal.set(false);
  }
  // onProductClicked(product: Product) {
  //   console.log('Produit clique:', product);

  // }
  favoriteAdded = output<Product>();
  onFavoriteAdded(product: Product) {
//     const alreadyAdded = this.favorites().some(p => p.id === product.id);
//     if (alreadyAdded) {
// this.favorites.update(favs => [...favs, product])  ; 
// return;
//     }else{
//        alert(`${product.name} est déjà dans vos favoris !`);
//     }
    console.log('Favori ajoute : ', product.name);
    this.favoriteAdded.emit(product);

  }


}
