import { Controller, Post, Body } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { CreateRuralProducersService } from 'src/modules/rural-producers/services/create-rural-producers.service';

@Controller('rural-producers')
export class RuralProducersController {
  constructor(
    private readonly createRuralProducersService: CreateRuralProducersService,
  ) {}

  @Post()
  create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    return this.createRuralProducersService.execute(createRuralProducerDto);
  }
}
