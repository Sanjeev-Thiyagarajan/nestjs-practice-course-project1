import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get('/:id')
  getOneProduct() {
    return 'getting one product';
  }

  @Post()
  createProduct() {
    return 'created a brand new product';
  }

  @Patch('/:id')
  updateProduct() {
    return 'updated a product';
  }

  @Delete('/:id')
  deleteProduct() {
    return 'deleting product....';
  }
}
