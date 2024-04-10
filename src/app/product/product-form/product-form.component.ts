import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  @Output() saveProduct = new EventEmitter<Product>();

  // productForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
  //   price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  //   weight: new FormControl(0, [Validators.required]),
  // });
  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });
  id = -1;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.id = +id;
      }
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

      this.saveProduct.emit(product);
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
