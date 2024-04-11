import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from '../product/product.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [
    RouterLink,
    NgClass,
    AsyncPipe,
    MatButtonModule,
    MatCardModule,
    ProductComponent,
  ],
})
export class ProductListComponent {
  products = inject(ProductService).getList();
}
