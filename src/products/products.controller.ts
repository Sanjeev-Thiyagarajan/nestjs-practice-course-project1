import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
  getOneProduct(@Param('id') id: string) {
    //params always come as strings need to convert to int
    return this.productsService.getOneProduct(parseInt(id));
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Product {
    // const { name, description, price, category } = body;

    return this.productsService.createProduct(createProductDto);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): void {
    this.productsService.deleteProduct(parseInt(id));
    return;
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(parseInt(id), updateProductDto);
  }
}
