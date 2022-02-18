import {
  IsEnum,
  IsNumber,
  IsOptional,
  Length,
  Max,
  Min,
} from 'class-validator';
import { ProductCategory } from '../product.model';

export class UpdateProductDto {
  @IsOptional()
  @Length(3, 50)
  name?: string;
  @IsOptional()
  @Length(3, 200)
  description?: string;
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  price?: number;
  @IsOptional()
  @IsEnum(ProductCategory)
  category?: ProductCategory;
}
