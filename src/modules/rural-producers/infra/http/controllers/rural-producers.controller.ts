import { Controller, Post, Body } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { RuralProducersService } from 'src/modules/rural-producers/services/create-rural-producers.service';

@Controller('rural-producers')
export class RuralProducersController {
  constructor(private readonly ruralProducersService: RuralProducersService) {}

  @Post()
  create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    return this.ruralProducersService.execute(createRuralProducerDto);
  }
}
