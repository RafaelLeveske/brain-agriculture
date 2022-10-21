import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';
import { ValidateCropsPlanted } from '../infra/http/validators/validate-crops-planted';
import { ValidateStatesUf } from '../infra/http/validators/validate-states-uf';

export type CropsPlantedType =
  | 'soy'
  | 'corn'
  | 'cotton'
  | 'coffee'
  | 'sugar_cane';

export type StatesType =
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'GO'
  | 'ES'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SP'
  | 'SC'
  | 'SE'
  | 'TO';

export class EditRuralProducerDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  document_number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  producer_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  farm_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @Validate(ValidateStatesUf)
  @ApiProperty({
    type: String,
    enum: [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'GO',
      'ES',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SP',
      'SC',
      'SE',
      'TO',
    ],
    isArray: false,
    description: 'This is a required property',
  })
  state: StatesType;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  farm_hectares_total_area: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  agricultural_hectares_area: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  vegetation_hectares_area: number;

  @IsArray()
  @IsNotEmpty()
  @Validate(ValidateCropsPlanted)
  @ApiProperty({
    type: [String],
    enum: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
    description: 'This is a required property',
  })
  crops_planted: CropsPlantedType[];
}
