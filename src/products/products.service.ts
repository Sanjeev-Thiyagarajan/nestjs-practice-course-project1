import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductCategory } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  createProduct(createProductDto: CreateProductDto): Product {
    const id = Math.floor(Math.random() * 100000);
    const { name, description, price, category } = createProductDto;

    const newProduct = { id, name, description, price, category };
    this.products.push(newProduct);

    return newProduct;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto): Product {
    const product = this.products.find((product) => product.id === id);
    Object.assign(product, updateProductDto);
    return product;
  }
}
