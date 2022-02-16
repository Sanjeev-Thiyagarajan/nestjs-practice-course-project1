import { Injectable } from '@nestjs/common';
import { Product, ProductCategory } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  createProduct(
    name: string,
    description: string,
    price: number,
    category: ProductCategory,
  ): Product {
    const id = Math.floor(Math.random() * 100000);
    const newProduct = { id, name, description, price, category };
    this.products.push(newProduct);

    return newProduct;
  }
}
