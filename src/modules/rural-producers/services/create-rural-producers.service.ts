import { Inject, Injectable } from '@nestjs/common';
import generateUUID from 'src/shared/utils/generateUUID';
import { Repository } from 'typeorm';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import { RuralProducer } from '../infra/database/entities/rural-producer.entity';

@Injectable()
export class RuralProducersService {
  constructor(
    @Inject('RURAL_PRODUCER_REPOSITORY')
    private ruralProducerRepository: Repository<RuralProducer>,
  ) {}

  public async execute(
    createRuralProducerDto: CreateRuralProducerDto,
  ): Promise<any> {
    const client = await this.ruralProducerRepository.save({
      id: generateUUID.createUUID(),
      agriculturalHectaresArea:
        createRuralProducerDto.agricultural_hectares_area,
      city: createRuralProducerDto.city,
      documentNumber: createRuralProducerDto.document_number,
      farmHectaresTotalArea: createRuralProducerDto.farm_hectares_total_area,
      farmName: createRuralProducerDto.farm_name,
      producerName: createRuralProducerDto.producer_name,
      state: createRuralProducerDto.state,
      vegetationHectaresArea: createRuralProducerDto.vegetation_hectares_area,
      cropsPlanted: createRuralProducerDto.crops_planted,
    });

    return client;
  }
}
