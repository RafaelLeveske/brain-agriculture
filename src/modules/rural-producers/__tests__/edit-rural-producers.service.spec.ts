import { Test, TestingModule } from '@nestjs/testing';
import { AppError } from 'src/shared/errors/app-error';
import { EditRuralProducerDto } from '../dtos/edit-rural-producer.dto';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { EditRuralProducersService } from '../services/edit-rural-producers.service';

describe('EditRuralProducersService', () => {
  let service: EditRuralProducersService;
  let mockModule: TestingModule;
  beforeEach(async () => {
    mockModule = await Test.createTestingModule({
      providers: [
        RuralProducerRepositoryImplementation,
        EditRuralProducersService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            save: jest.fn().mockResolvedValue(EditRuralProducerDto),
          },
        },
      ],
    }).compile();

    service = mockModule.get<EditRuralProducersService>(
      EditRuralProducersService,
    );
  });

  afterAll(async () => {
    await mockModule.close();
  });

  it('should be able to update rural producer', async () => {
    const ruralProducer = await service.execute({
      id: '123',
      agricultural_hectares_area: 99,
      city: 'Brasília',
      crops_planted: ['coffee'],
      document_number: '036.872.311-94',
      farm_hectares_total_area: 202,
      farm_name: 'Test Farm',
      producer_name: 'Test Producer',
      state: 'DF',
      vegetation_hectares_area: 55,
    });
    expect(ruralProducer).toBeDefined();
  });

  it('should not be able to update rural producer if the cpf/cnpj is not valid', async () => {
    await expect(
      service.execute({
        id: '123',
        agricultural_hectares_area: 99,
        city: 'Brasília',
        crops_planted: ['coffee'],
        document_number: '00000000000',
        farm_hectares_total_area: 202,
        farm_name: 'Test Farm',
        producer_name: 'Test Producer',
        state: 'DF',
        vegetation_hectares_area: 55,
      }),
    ).rejects.toEqual(new AppError('CPF/CNPJ is not valid', 422));
  });

  it('should not be able to update if the sum of agricultural area and vegetation area is greater than the farm total area', async () => {
    await expect(
      service.execute({
        id: '123',
        agricultural_hectares_area: 399,
        city: 'Brasília',
        crops_planted: ['coffee'],
        document_number: '036.872.311-94',
        farm_hectares_total_area: 202,
        farm_name: 'Test Farm',
        producer_name: 'Test Producer',
        state: 'DF',
        vegetation_hectares_area: 55,
      }),
    ).rejects.toEqual(
      new AppError(
        'The sum of agricultural area and vegetation area can not be greater than the farm total area',
        400,
      ),
    );
  });
});
