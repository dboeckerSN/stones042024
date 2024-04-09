import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'stones';
  productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);

  onPriceChanged(price: number) {
    alert('Neuer Preis: ' + price);
  }

  changePrice(price: number) {
    this.productParent.price = price;
    this.onPriceChanged(this.productParent.price);
  }
}
