import { Component } from '@angular/core';
import  { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  nom = "";
  
}
