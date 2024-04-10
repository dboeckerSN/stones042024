import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';
import { UtilsModule } from '../../utils/utils.module';
import { ProductComponent } from '../product/product.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      imports: [MatCardModule, UtilsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
