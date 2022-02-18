import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductCategory } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts(): Product[] {
    return this.products;
  }

  getFilteredProducts(filterDto: GetProductsFilterDto): Product[] {
    const { category, search } = filterDto;

    let filteredProducts = this.getAllProducts();

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category,
      );
    }

    if (search) {
      filteredProducts = filteredProducts.filter((product) => {
        if (
          product.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
          product.description.toLocaleLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }

        return false;
      });
    }

    return filteredProducts;
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
