import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = new Product(12, 'Granitstein Gravo', 134.56, 12);

  raisePrice() {
    this.product.price += 5;
    alert('Neuer Preis: ' + this.product.price);
  }
}
