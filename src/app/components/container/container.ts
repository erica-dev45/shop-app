import { Component, output } from '@angular/core';
import { Productlist} from '../product-list/product-list';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [Productlist],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {
  favoriteAdded = output<Product>();

  onFavriteAdded(product: Product){
    this.favoriteAdded.emit(product);
  }
}
