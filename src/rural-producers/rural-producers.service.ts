import { Inject, Injectable } from '@nestjs/common';
import { CreateRuralProducerDto } from './dto/create-rural-producer.dto';
import { UpdateRuralProducerDto } from './dto/update-rural-producer.dto';
import { Repository } from 'typeorm';
import { RuralProducer } from './entities/rural-producer.entity';

@Injectable()
export class RuralProducersService {
  constructor(
    @Inject('RURAL_PRODUCER_REPOSITORY')
    private photoRepository: Repository<RuralProducer>,
  ) {}

  create(createRuralProducerDto: CreateRuralProducerDto) {
    return 'This action adds a new ruralProducer';
  }

  findAll() {
    return `This action returns all ruralProducers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruralProducer`;
  }

  update(id: number, updateRuralProducerDto: UpdateRuralProducerDto) {
    return `This action updates a #${id} ruralProducer`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruralProducer`;
  }
}
