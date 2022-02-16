import { ProductCategory } from '../product.model';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
}
