import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import { RuralProducer } from '../infra/database/entities/rural-producer.entity';

@Injectable()
export class RuralProducersService {
  constructor(
    @Inject('RURAL_PRODUCER_REPOSITORY')
    private ruralProducerRepository: Repository<RuralProducer>,
  ) {}

  create(createRuralProducerDto: CreateRuralProducerDto) {
    return 'This action adds a new ruralProducer';
  }
}
