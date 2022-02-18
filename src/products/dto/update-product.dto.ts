import { ProductCategory } from '../product.model';

export class UpdateProductDto {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
}
