import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsEmail,
  Matches,
  IsInt,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  lastName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z]){8,}/, {
    message: 'Password không phù hợp',
  })
  password: string;
}

export class GetParamsUserDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
