import { Component } from '@angular/core';
import { Productlist} from '../product-list/product-list';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [Productlist],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {}
