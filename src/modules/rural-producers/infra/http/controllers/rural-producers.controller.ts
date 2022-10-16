import { Controller, Post, Body } from '@nestjs/common';
import { CreateRuralProducerDto } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';
import { CreateRuralProducersService } from 'src/modules/rural-producers/services/create-rural-producers.service';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

@ApiTags('Rural Producers')
@Controller('rural-producers')
export class RuralProducersController {
  constructor(
    private readonly createRuralProducersService: CreateRuralProducersService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created',
    status: 201,
    schema: {
      example: {
        message: 'Produtor rural criado com sucesso',
      },
      allOf: [
        {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      ],
    },
  })
  @ApiUnprocessableEntityResponse({
    description: 'Unprocessable Entity',
    status: 422,
    schema: {
      example: {
        statusCode: 422,
        message: 'CPF/CNPJ is not valid',
      },
      allOf: [
        {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            statusCode: {
              type: 'number',
            },
          },
        },
      ],
    },
  })
  create(@Body() createRuralProducerDto: CreateRuralProducerDto) {
    return this.createRuralProducersService.execute(createRuralProducerDto);
  }
}
