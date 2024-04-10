import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { map } from 'rxjs';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  // productForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
  //   price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  //   weight: new FormControl(0, [Validators.required]),
  // });
  private productService = inject(ProductService);
  productForm = inject(FormBuilder).group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });
  id = -1;
  nameReversed = '';
  nameLength = 0;
  constructor() {
    inject(ActivatedRoute).paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.id = +id;
      }
    });
    this.productForm.controls.name.valueChanges
      .pipe(map((name) => name?.split('').reverse().join('')))
      .subscribe((nameReversed) => (this.nameReversed = nameReversed ?? ''));

    this.productForm.controls.name.valueChanges.subscribe((value) => {
      this.nameLength = value ? value.length : 0;
    });
  }

  save() {
    const formValue = this.productForm.value;
    if (
      this.productForm.valid &&
      formValue.name &&
      formValue.price &&
      formValue.weight
    ) {
      const product = new Product(
        this.id,
        formValue.name,
        formValue.price,
        formValue.weight
      );

      this.productService.newProduct(product);
      this.productForm.reset();
    }
  }

  hasSaved() {
    const formValue = this.productForm.value;
    if (!formValue.name && !formValue.price && !formValue.weight) {
      return true;
    } else {
      return confirm(
        'Du hast ungespeicherte Änderungen, willst du wirklich gehen?'
      );
    }
  }
}
