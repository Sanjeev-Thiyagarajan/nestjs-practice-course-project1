import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  getAllProducts() {
    return this.products;
  }
}
