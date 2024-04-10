import { CanDeactivateFn } from '@angular/router';
import { ProductFormComponent } from '../../product/product-form/product-form.component';

export const hasSavedGuard: CanDeactivateFn<ProductFormComponent> = (
  component
) => {
  return component.hasSaved();
};
