import { ProductCategory } from '../product.model';

export class GetProductsFilterDto {
  search?: string;
  category: ProductCategory;
}
