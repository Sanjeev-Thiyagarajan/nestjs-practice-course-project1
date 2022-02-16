import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    return 'getting all products';
  }

  @Get('/:id')
  getOneProduct() {
    return 'getting one products';
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
