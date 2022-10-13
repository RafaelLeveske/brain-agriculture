import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { UpdateRuralProducerDto } from 'src/modules/rural-producers/dtos/update-rural-producer.dto';
import { RuralProducersService } from 'src/modules/rural-producers/services/rural-producers.service';

@Controller('rural-producers')
export class RuralProducersController {
  constructor(private readonly ruralProducersService: RuralProducersService) {}

  @Post()
  create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    return this.ruralProducersService.create(createRuralProducerDto);
  }

  @Get()
  findAll() {
    return this.ruralProducersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ruralProducersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRuralProducerDto: UpdateRuralProducerDto,
  ) {
    return this.ruralProducersService.update(+id, updateRuralProducerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ruralProducersService.remove(+id);
  }
}
