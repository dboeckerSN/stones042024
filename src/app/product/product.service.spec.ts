import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getList should return product list', () => {
    expect(service.getList()[0].id).toBe(0);
  });

  it('newProduct should add product', () => {
    const product = new Product(-1, 'test', 5, 20);

    service.newProduct(product);

    expect(service.getList()[0].id).toBe(product.id);
  });
});
