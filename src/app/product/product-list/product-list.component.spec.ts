import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';
import { UtilsModule } from '../../utils/utils.module';
import { ProductComponent } from '../product/product.component';
import { MockProductService, ProductService } from '../product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      imports: [RouterTestingModule, MatCardModule, UtilsModule],
      providers: [{ provide: ProductService, useClass: MockProductService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products from product service', () => {
    expect(component.products[0].id).toBe(-1);
  });
});
