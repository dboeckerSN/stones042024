import { Component } from '@angular/core';
import { Product } from './product/product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    DatePipe,
    UpperCasePipe,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
  ],
})
export class AppComponent {
  title = 'stones';
  today = new Date();
  // productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);
}
