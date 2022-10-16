import { Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import { CreateRuralProducersServicesResponse } from '../dtos/create-rural-producers.service-dto';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import AppError from 'src/shared/errors/app-error';

@Injectable()
export class CreateRuralProducersService {
  constructor(
    private ruralProducerRepositoryImplementation: RuralProducerRepositoryImplementation,
  ) {}

  public async execute(
    createRuralProducerDto: CreateRuralProducerDto,
  ): Promise<CreateRuralProducersServicesResponse> {
    const strippedDocumentNumber =
      createRuralProducerDto.document_number.replace(/\D/g, '');

    if (
      !cpfValidator.isValid(strippedDocumentNumber) &&
      !cnpjValidator.isValid(strippedDocumentNumber)
    ) {
      throw new AppError('CPF/CNPJ is not valid', 422);
    }

    await this.ruralProducerRepositoryImplementation.createRuralProducer({
      agricultural_hectares_area:
        createRuralProducerDto.agricultural_hectares_area,
      city: createRuralProducerDto.city,
      document_number: createRuralProducerDto.document_number,
      farm_hectares_total_area: createRuralProducerDto.farm_hectares_total_area,
      farm_name: createRuralProducerDto.farm_name,
      producer_name: createRuralProducerDto.producer_name,
      state: createRuralProducerDto.state,
      vegetation_hectares_area: createRuralProducerDto.vegetation_hectares_area,
      crops_planted: createRuralProducerDto.crops_planted,
    });

    return { message: 'Produtor rural criado com sucesso' };
  }
}
