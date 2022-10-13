export class CreateRuralProducerDto {
  document_number: string;

  producer_name: string;

  farm_name: string;

  city: string;

  state: string;

  farm_hectares_total_area: number;

  agricultural_hectares_area: number;

  vegetation_hectares_area: number;

  crops_planted: string[];
}
