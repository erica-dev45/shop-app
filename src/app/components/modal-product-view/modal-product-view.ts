// import { DatePipe } from '@angular/common';
// import { Product } from './../../models/product/product';
// import { Component , input, output} from '@angular/core';

// @Component({
//   selector: 'app-modal-product-view',
//   imports: [DatePipe],
//   templateUrl: './modal-product-view.html',
//   styleUrl: './modal-product-view.css',
// })
// export class ModalProductView {
//   product = input<Product>();

//   close = output<void>();
//   // favorites = input<Product[]>([]);  // ← receives current favorites

//   onCloseClick(){
    
//     this.close.emit();
//   }

//   favoriteAdded= output<Product>();

//  onAddToFavrites() {
//   const p= this.product();
  
//   this.favoriteAdded.emit(p);
//   this.close.emit();
//   // if (!p) return;

//   // const alreadyAdded = this.favorites().some(f => f.id === p.id);
//   // if (alreadyAdded) {
//   //   alert(`${p.name} est déjà dans vos favoris !`);
//   //   return;  // ← stops here, never emits
//   // }

// }
// }

import { DatePipe } from '@angular/common';
import { Product } from './../../models/product/product';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal-product-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  product = input<Product>();
  favorites = input<Product[]>([]);
  close = output<void>();
  favoriteAdded = output<Product>();

  onCloseClick() {
    this.close.emit();
  }

  onAddToFavrites() {
    const p = this.product();
    if (!p) return;

    const alreadyAdded = this.favorites().some(f => f.id === p.id);
    if (alreadyAdded) {
      alert(`${p.name} est déjà dans vos favoris !`);
      return;
    }

    this.favoriteAdded.emit(p);
    this.close.emit();
  }
}
