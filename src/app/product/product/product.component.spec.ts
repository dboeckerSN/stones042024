import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../product';
import { By } from '@angular/platform-browser';
import { UtilsModule } from '../../utils/utils.module';
import { MatButtonModule } from '@angular/material/button';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [UtilsModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product(12, 'Granit', 22, 34);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raisePrice should raise price by 5', () => {
    const previousPrice = component.product.price;

    component.raisePrice();

    expect(component.product.price).toBe(previousPrice + 5);
  });

  it('should render name correctly', () => {
    const liName = fixture.debugElement.query(By.css('#name'));

    expect(liName.nativeElement.textContent).toContain('Granit');
  });
});
