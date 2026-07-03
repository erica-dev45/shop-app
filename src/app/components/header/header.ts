import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isproductListOpen = false;
  activeLink= 'Home';
  links = ['Home', 'Product', 'Blog', 'About', 'Contact'];
  isMenuOpen= false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }

  favoritesCount = input(0);
}
