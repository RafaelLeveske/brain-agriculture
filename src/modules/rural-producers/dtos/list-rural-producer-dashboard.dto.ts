import { ApiProperty } from '@nestjs/swagger';

export class ListRuralProducerDashboardStatesOccurrencesDTO {
  @ApiProperty({
    type: Number,
  })
  AC: number;
  @ApiProperty({
    type: Number,
  })
  AL: number;
  @ApiProperty({
    type: Number,
  })
  AP: number;
  @ApiProperty({
    type: Number,
  })
  AM: number;
  @ApiProperty({
    type: Number,
  })
  BA: number;
  @ApiProperty({
    type: Number,
  })
  CE: number;
  @ApiProperty({
    type: Number,
  })
  DF: number;
  @ApiProperty({
    type: Number,
  })
  ES: number;
  @ApiProperty({
    type: Number,
  })
  GO: number;
  @ApiProperty({
    type: Number,
  })
  MA: number;
  @ApiProperty({
    type: Number,
  })
  MS: number;
  @ApiProperty({
    type: Number,
  })
  MT: number;
  @ApiProperty({
    type: Number,
  })
  MG: number;
  @ApiProperty({
    type: Number,
  })
  PA: number;
  @ApiProperty({
    type: Number,
  })
  PB: number;
  @ApiProperty({
    type: Number,
  })
  PR: number;
  @ApiProperty({
    type: Number,
  })
  PE: number;
  @ApiProperty({
    type: Number,
  })
  PI: number;
  @ApiProperty({
    type: Number,
  })
  RJ: number;
  @ApiProperty({
    type: Number,
  })
  RN: number;
  @ApiProperty({
    type: Number,
  })
  RS: number;
  @ApiProperty({
    type: Number,
  })
  RO: number;
  @ApiProperty({
    type: Number,
  })
  RR: number;
  @ApiProperty({
    type: Number,
  })
  SC: number;
  @ApiProperty({
    type: Number,
  })
  SP: number;
  @ApiProperty({
    type: Number,
  })
  SE: number;
  @ApiProperty({
    type: Number,
  })
  TO: number;
}

export class ListRuralProducerDashboardCropsOccurrencesDTO {
  @ApiProperty({
    type: Number,
  })
  soy: number;
  @ApiProperty({
    type: Number,
  })
  corn: number;
  @ApiProperty({
    type: Number,
  })
  cotton: number;
  @ApiProperty({
    type: Number,
  })
  coffee: number;
  @ApiProperty({
    type: Number,
  })
  sugar_cane: number;
}

export class ListRuralProducerDashboardSoilUsageDTO {
  @ApiProperty({
    type: Number,
  })
  agricultural_hectares_area: number;
  @ApiProperty({
    type: Number,
  })
  vegetation_hectares_area: number;
}

export class ListRuralProducerDashboardDTO {
  @ApiProperty({
    type: Number,
  })
  total_number_of_farms: number;
  @ApiProperty({
    type: Number,
  })
  total_farms_in_hectares: number;
  @ApiProperty({
    type: Object,
  })
  states_occurrences: ListRuralProducerDashboardStatesOccurrencesDTO;
  @ApiProperty({
    type: Object,
  })
  crops_occurrences: ListRuralProducerDashboardCropsOccurrencesDTO;
  @ApiProperty({
    type: Object,
  })
  soil_usage: ListRuralProducerDashboardSoilUsageDTO;
}
