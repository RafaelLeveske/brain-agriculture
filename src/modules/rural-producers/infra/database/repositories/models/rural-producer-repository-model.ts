import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { EditRuralProducerDto } from 'src/modules/rural-producers/dtos/edit-rural-producer.dto';
import { RuralProducer } from '../../entities/rural-producer.entity';

export default interface RuralProducerRepositoryModel {
  createRuralProducer({
    agricultural_hectares_area,
    city,
    crops_planted,
    document_number,
    farm_hectares_total_area,
    farm_name,
    producer_name,
    state,
    vegetation_hectares_area,
  }: CreateRuralProducerDto): Promise<RuralProducer>;

  updateRuralProducer({
    id,
    agricultural_hectares_area,
    city,
    crops_planted,
    document_number,
    farm_hectares_total_area,
    farm_name,
    producer_name,
    state,
    vegetation_hectares_area,
  }: EditRuralProducerDto): Promise<RuralProducer>;

  listRuralProducers(): Promise<RuralProducer[]>;

  destroyRuralProducer(id: string): Promise<void>;

  findOneRuralProducer(id: string): Promise<RuralProducer | null>;
}
