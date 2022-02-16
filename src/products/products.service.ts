import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }
}
