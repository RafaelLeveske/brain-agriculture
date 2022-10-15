import { Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import { RuralProducer } from '../infra/database/entities/rural-producer.entity';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';

@Injectable()
export class CreateRuralProducersService {
  constructor(
    private ruralProducerRepositoryImplementation: RuralProducerRepositoryImplementation,
  ) {}

  public async execute(
    createRuralProducerDto: CreateRuralProducerDto,
  ): Promise<RuralProducer> {
    const client =
      await this.ruralProducerRepositoryImplementation.createRuralProducer({
        agricultural_hectares_area:
          createRuralProducerDto.agricultural_hectares_area,
        city: createRuralProducerDto.city,
        document_number: createRuralProducerDto.document_number,
        farm_hectares_total_area:
          createRuralProducerDto.farm_hectares_total_area,
        farm_name: createRuralProducerDto.farm_name,
        producer_name: createRuralProducerDto.producer_name,
        state: createRuralProducerDto.state,
        vegetation_hectares_area:
          createRuralProducerDto.vegetation_hectares_area,
        crops_planted: createRuralProducerDto.crops_planted,
      });

    return client;
  }
}
