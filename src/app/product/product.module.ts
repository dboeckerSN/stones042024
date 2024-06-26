import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { UtilsModule } from '../utils/utils.module';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductComponent, ProductFormComponent, ProductListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    UtilsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [ProductComponent, ProductFormComponent],
})
export class ProductModule {}
