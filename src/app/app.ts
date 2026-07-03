// import { Component, signal, input, computed } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from "./components/header/header";
// import { Container } from "./components/container/container";
// import { Footer } from "./components/footer/footer";
// import { Product } from './models/product/product';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Header, Container, Footer],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('shop-app');

//   // favoritesCount =signal(0);
//   favorites = input<Product[]>([]);  // ← receives current favorites


//   onFavoritesAdded(product: Product){
    
//   const alreadyAdded = this.favorites().some(p=> p.id === product.id);
//   if (alreadyAdded) {
//     // alert(`${p.name} est déjà dans vos favoris !`);
//     // return;  // ← stops here, never emits
//     // this.favoritesCount.update(count => count + 1);
    
//   }
//   this.favorites.update(favorites=> [...favorites, product])
//     console.log('Total favoris: ', this.favoritesCount());
//   favoritesCount= computed(()=> this.favorites().length)
// }
// }


import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { Product } from './models/product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Container, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-app');
  favorites = signal<Product[]>([]);  // ← signal pas input
  favoritesCount = computed(() => this.favorites().length);  // ← propriété de classe

  onFavoritesAdded(product: Product) {
    const alreadyAdded = this.favorites().some(p => p.id === product.id);
    if (alreadyAdded) {
      alert(`${product.name} est déjà dans vos favoris !`);
      return;
    }
    this.favorites.update(favs => [...favs, product]);
    console.log('Total favoris:', this.favoritesCount());
  }
}