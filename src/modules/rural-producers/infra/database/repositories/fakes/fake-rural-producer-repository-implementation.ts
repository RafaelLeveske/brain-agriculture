import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import generateUUID from 'src/shared/utils/generateUUID';
import { Repository } from 'typeorm';
import { RuralProducer } from '../../entities/rural-producer.entity';
import RuralProducerRepositoryModel from '../models/rural-producer-repository-model';

export default class FakeRuralProducerRepositoryImplementation
  implements RuralProducerRepositoryModel
{
  constructor(private ruralProducerRepository: Repository<RuralProducer>) {}

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
    const ruralProducer = new RuralProducer();

    Object.assign(ruralProducer, {
      id: generateUUID.createUUID(),
      agricultural_hectares_area,
      city,
      crops_planted,
      document_number,
      farm_hectares_total_area,
      farm_name,
      producer_name,
      state,
      vegetation_hectares_area,
    });

    return ruralProducer;
  }
}
