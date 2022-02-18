import {
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Length,
  Max,
  Min,
} from 'class-validator';
import { endWith } from 'rxjs';
import { ProductCategory } from '../product.model';

export class CreateProductDto {
  @Length(3, 50)
  name: string;

  @Length(3, 200)
  description: string;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;

  @IsEnum(ProductCategory)
  category: ProductCategory;
}
