import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Product, ProductCategory } from './product.model';
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
  createProduct(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('category') category: ProductCategory,
  ): Product {
    // const { name, description, price, category } = body;

    return this.productsService.createProduct(
      name,
      description,
      price,
      category,
    );
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
