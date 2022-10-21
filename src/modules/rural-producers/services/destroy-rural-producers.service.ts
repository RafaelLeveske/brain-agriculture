import { Injectable } from '@nestjs/common';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { DestroyRuralProducersDto } from '../dtos/destroy-rural-producer.dto';
import { AppError } from 'src/shared/errors/app-error';

@Injectable()
export class DestroyRuralProducersService {
  constructor(
    private ruralProducerRepositoryImplementation: RuralProducerRepositoryImplementation,
  ) {}

  public async execute(id: string): Promise<DestroyRuralProducersDto> {
    const ruralProducer =
      await this.ruralProducerRepositoryImplementation.findOneRuralProducer(id);

    if (!ruralProducer) {
      throw new AppError('Rural producer not found', 404);
    }

    await this.ruralProducerRepositoryImplementation.destroyRuralProducer(id);

    return {
      message: 'Rural Producer deleted',
    };
  }
}
