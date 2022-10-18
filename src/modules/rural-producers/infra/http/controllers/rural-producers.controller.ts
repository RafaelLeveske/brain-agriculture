import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { CreateRuralProducersService } from 'src/modules/rural-producers/services/create-rural-producers.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ListRuralProducerDashboardService } from 'src/modules/rural-producers/services/list-rural-producer-dashboard.service';
import swaggerCreateRuralProducerResponseOptions from '../../../utils/swagger-create-rural-producer-response-options';

@ApiTags('Rural Producers')
@Controller('rural-producers')
export class RuralProducersController {
  constructor(
    private readonly createRuralProducersService: CreateRuralProducersService,
    private readonly listRuralProducerDashboardService: ListRuralProducerDashboardService,
  ) {}

  @Post()
  @ApiCreatedResponse(
    swaggerCreateRuralProducerResponseOptions.createRuralProducerApiCreatedResponse(),
  )
  @ApiUnprocessableEntityResponse(
    swaggerCreateRuralProducerResponseOptions.createRuralProducerApiUnprocessableEntityResponse(),
  )
  create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    return this.createRuralProducersService.execute(createRuralProducerDto);
  }

  @Get('dashboard')
  @ApiOkResponse(
    swaggerCreateRuralProducerResponseOptions.listRuralProducerApiOkResponse(),
  )
  list() {
    return this.listRuralProducerDashboardService.execute();
  }
}
