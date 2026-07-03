import { Component, signal } from '@angular/core';
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

  favoritesCount =signal(0);

  onFavoritesAdded(product: Product){
    this.favoritesCount.update(count => count + 1);
    console.log('Total favoris: ', this.favoritesCount());
    
  }
}
