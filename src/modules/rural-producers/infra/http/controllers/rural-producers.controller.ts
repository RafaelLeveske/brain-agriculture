import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { CreateRuralProducersService } from 'src/modules/rural-producers/services/create-rural-producers.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ListRuralProducerDashboardService } from 'src/modules/rural-producers/services/list-rural-producer-dashboard.service';
import swaggerCreateRuralProducerResponseOptions from '../../../utils/swagger-create-rural-producer-response-options';
import { EditRuralProducerDto } from 'src/modules/rural-producers/dtos/edit-rural-producer.dto';
import { EditRuralProducersService } from 'src/modules/rural-producers/services/edit-rural-producers.service';
import { DestroyRuralProducersService } from 'src/modules/rural-producers/services/destroy-rural-producers.service';

@ApiTags('Rural Producers')
@Controller('rural-producers')
export class RuralProducersController {
  constructor(
    private readonly createRuralProducersService: CreateRuralProducersService,
    private readonly listRuralProducerDashboardService: ListRuralProducerDashboardService,
    private readonly editRuralProducersService: EditRuralProducersService,
    private readonly destroyRuralProducersService: DestroyRuralProducersService,
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

  @ApiOkResponse(
    swaggerCreateRuralProducerResponseOptions.editRuralProducerApiOkResponse(),
  )
  @ApiNotFoundResponse(
    swaggerCreateRuralProducerResponseOptions.editRuralProducerApiNotFoundResponse(),
  )
  @ApiUnprocessableEntityResponse(
    swaggerCreateRuralProducerResponseOptions.editRuralProducerApiUnprocessableEntityResponse(),
  )
  @Put(':id')
  update(
    @Body() editRuralProducerDto: EditRuralProducerDto,
    @Param('id') id: string,
  ) {
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
    } = editRuralProducerDto;

    return this.editRuralProducersService.execute({
      agricultural_hectares_area,
      city,
      crops_planted,
      document_number,
      farm_hectares_total_area,
      farm_name,
      id,
      producer_name,
      state,
      vegetation_hectares_area,
    });
  }

  @ApiOkResponse(
    swaggerCreateRuralProducerResponseOptions.destroyRuralProducerApiOkResponse(),
  )
  @ApiNotFoundResponse(
    swaggerCreateRuralProducerResponseOptions.destroyRuralProducerApiNotFoundResponse(),
  )
  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.destroyRuralProducersService.execute(id);
  }
}
