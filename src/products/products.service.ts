import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductCategory } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  createProduct(createProductDto: CreateProductDto): Product {
    const id = Math.floor(Math.random() * 100000);
    const { name, description, price, category } = createProductDto;

    const newProduct = { id, name, description, price, category };
    this.products.push(newProduct);

    return newProduct;
  }
}
