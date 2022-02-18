import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductCategory } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getProducts(@Query() filterDto: GetProductsFilterDto): Product[] {
    if (Object.keys(filterDto).length) {
      return this.productsService.getFilteredProducts(filterDto);
    }
    return this.productsService.getAllProducts();
  }

  @Get('/:id')
  getOneProduct(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    //params always come as strings need to convert to int
    return this.productsService.getOneProduct(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Product {
    // const { name, description, price, category } = body;

    return this.productsService.createProduct(createProductDto);
  }

  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: string): void {
    this.productsService.deleteProduct(parseInt(id));
    return;
  }

  @Patch('/:id')
  updateProduct(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(parseInt(id), updateProductDto);
  }
}
