import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RuralProducersService } from './rural-producers.service';
import { CreateRuralProducerDto } from './dto/create-rural-producer.dto';
import { UpdateRuralProducerDto } from './dto/update-rural-producer.dto';

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
