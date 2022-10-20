import { Inject, Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { EditRuralProducerDto } from 'src/modules/rural-producers/dtos/edit-rural-producer.dto';
import { AppError } from 'src/shared/errors/app-error';
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
  async updateRuralProducer({
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
  }: EditRuralProducerDto): Promise<RuralProducer> {
    const client = await this.ruralProducerRepository.save({
      id,
      agriculturalHectaresArea: agricultural_hectares_area,
      city: city,
      cropsPlanted: crops_planted,
      documentNumber: document_number,
      farmHectaresTotalArea: farm_hectares_total_area,
      farmName: farm_name,
      producerName: producer_name,
      state,
      vegetationHectaresArea: vegetation_hectares_area,
    });

    return client;
  }

  async listRuralProducers(): Promise<RuralProducer[]> {
    try {
      const clients = await this.ruralProducerRepository.find();

      return clients;
    } catch (error) {
      throw new AppError(error.message);
    }
  }

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
    try {
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
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}
