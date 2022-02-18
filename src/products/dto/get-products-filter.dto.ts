import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProductCategory } from '../product.model';

export class GetProductsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
  @IsOptional()
  @IsEnum(ProductCategory)
  category?: ProductCategory;
}
