import { Inject, Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import generateUUID from 'src/shared/utils/generateUUID';
import { Repository } from 'typeorm';
import { RuralProducer } from '../../entities/rural-producer.entity';
import RuralProducerRepositoryModel from '../models/rural-producer-repository-model';

@Injectable()
export default class RuralProducerRepositoryImplementation
  implements RuralProducerRepositoryModel
{
  constructor(
    @Inject('RURAL_PRODUCER_REPOSITORY')
    private ruralProducerRepository: Repository<RuralProducer>,
  ) {}

  async createRuralProducer({
    agricultural_hectares_area,
    city,
    crops_planted,
    document_number,
    farm_hectares_total_area,
    farm_name,
    producer_name,
    state,
    vegetation_hectares_area,
  }: CreateRuralProducerDto): Promise<RuralProducer> {
    const client = await this.ruralProducerRepository.save({
      id: generateUUID.createUUID(),
      agriculturalHectaresArea: agricultural_hectares_area,
      city: city,
      documentNumber: document_number,
      farmHectaresTotalArea: farm_hectares_total_area,
      farmName: farm_name,
      producerName: producer_name,
      state: state,
      vegetationHectaresArea: vegetation_hectares_area,
      cropsPlanted: crops_planted,
    });

    return client;
  }
}
