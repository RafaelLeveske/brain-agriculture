import { Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import { AppError } from 'src/shared/errors/app-error';
import { CreateRuralProducersServicesResponse } from '../dtos/create-rural-producers.service.dto';

@Injectable()
export class CreateRuralProducersService {
  constructor(
    private ruralProducerRepositoryImplementation: RuralProducerRepositoryImplementation,
  ) {}

  public async execute(
    createRuralProducerDto: CreateRuralProducerDto,
  ): Promise<CreateRuralProducersServicesResponse> {
    const {
      agricultural_hectares_area,
      city,
      crops_planted,
      document_number,
      farm_hectares_total_area,
      farm_name,
      producer_name,
      state,
      vegetation_hectares_area,
    } = createRuralProducerDto;

    const sumOfAgriculturalAndVegetationArea =
      vegetation_hectares_area + agricultural_hectares_area;

    if (sumOfAgriculturalAndVegetationArea > farm_hectares_total_area) {
      throw new AppError(
        'The sum of agricultural area and vegetation area can not be greater than the farm total area',
        400,
      );
    }

    const strippedDocumentNumber = document_number.replace(/\D/g, '');

    if (
      !cpfValidator.isValid(strippedDocumentNumber) &&
      !cnpjValidator.isValid(strippedDocumentNumber)
    ) {
      throw new AppError('CPF/CNPJ is not valid', 422);
    }

    await this.ruralProducerRepositoryImplementation.createRuralProducer({
      agricultural_hectares_area,
      city,
      document_number,
      farm_hectares_total_area,
      farm_name,
      producer_name,
      state,
      vegetation_hectares_area,
      crops_planted,
    });

    return { message: 'Rural producer created' };
  }
}
