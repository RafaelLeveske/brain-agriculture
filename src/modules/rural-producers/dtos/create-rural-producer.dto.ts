import { ApiProperty } from '@nestjs/swagger';

export type CropsPlantedType =
  | 'soy'
  | 'corn'
  | 'cotton'
  | 'coffee'
  | 'sugar_cane';

export class CreateRuralProducerDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  document_number: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  producer_name: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  farm_name: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  city: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  state: string;
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  farm_hectares_total_area: number;
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  agricultural_hectares_area: number;
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  vegetation_hectares_area: number;
  @ApiProperty({
    type: [String],
    enum: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
    description: 'This is a required property',
  })
  crops_planted: CropsPlantedType[];
}
