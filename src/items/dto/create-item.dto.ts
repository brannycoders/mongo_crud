/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(500)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;
}
