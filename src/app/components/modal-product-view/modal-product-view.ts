import { DatePipe } from '@angular/common';
import { Product } from './../../models/product/product';
import { Component , input, output} from '@angular/core';

@Component({
  selector: 'app-modal-product-view',
  imports: [DatePipe],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  product = input<Product>();

  close = output<void>();

  onCloseClick(){
    this.close.emit();
  }

  favoriteAdded= output<Product>();

  onAddToFavrites(){
    const p = this.product();
    if(p){
      this.favoriteAdded.emit(p);
    }
  }
}
