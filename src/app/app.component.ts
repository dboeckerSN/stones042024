import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'stones';
  today = new Date();
  // productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);
}
