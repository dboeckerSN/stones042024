import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NettoPipe } from '../../utils/pipes/netto.pipe';

@Component({
  standalone: true,
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [CommonModule, MatButtonModule, NettoPipe],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  showPrice = true;
  styleConfig: any = {
    borderStyle: 'dashed',
  };

  togglePrice() {
    this.showPrice = !this.showPrice;
  }

  changePrice(price: number) {
    this.product.price = price;
  }

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }
}
