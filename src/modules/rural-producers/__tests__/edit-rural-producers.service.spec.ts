import { ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppError } from 'src/shared/errors/app-error';
import { EditRuralProducerDto } from '../dtos/edit-rural-producer.dto';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { EditRuralProducersService } from '../services/edit-rural-producers.service';

describe('EditRuralProducersService', () => {
  let service: EditRuralProducersService;
  let mockModule: TestingModule;
  let mockSuccessModuleMetadata: ModuleMetadata;
  let mockFailedModuleMetadata: ModuleMetadata;

  beforeEach(async () => {
    mockSuccessModuleMetadata = {
      providers: [
        RuralProducerRepositoryImplementation,
        EditRuralProducersService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            findOne: jest.fn().mockResolvedValue({
              id: '123',
              agriculturalHectaresArea: 99,
              city: 'Brasília',
              cropsPlanted: ['coffee'],
              documentNumber: '036.872.311-94',
              farmHectaresTotalArea: 202,
              farmName: 'Test Farm',
              producerName: 'Test Producer',
              state: 'DF',
              vegetationHectaresArea: 55,
            }),
            save: jest.fn().mockResolvedValue(EditRuralProducerDto),
          },
        },
      ],
    };

    mockFailedModuleMetadata = {
      providers: [
        RuralProducerRepositoryImplementation,
        EditRuralProducersService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            findOne: jest.fn().mockResolvedValue(null),
            save: jest.fn().mockResolvedValue(EditRuralProducerDto),
          },
        },
      ],
    };
  });

  afterAll(async () => {
    await mockModule.close();
  });

  it('should be able to update rural producer', async () => {
    mockModule = await Test.createTestingModule(
      mockSuccessModuleMetadata,
    ).compile();

    service = mockModule.get<EditRuralProducersService>(
      EditRuralProducersService,
    );

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
    mockModule = await Test.createTestingModule(
      mockSuccessModuleMetadata,
    ).compile();

    service = mockModule.get<EditRuralProducersService>(
      EditRuralProducersService,
    );

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
    mockModule = await Test.createTestingModule(
      mockSuccessModuleMetadata,
    ).compile();

    service = mockModule.get<EditRuralProducersService>(
      EditRuralProducersService,
    );

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

  it('should not be able to delete rural producer if the rural producer is not found', async () => {
    mockModule = await Test.createTestingModule(
      mockFailedModuleMetadata,
    ).compile();

    service = mockModule.get<EditRuralProducersService>(
      EditRuralProducersService,
    );

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
    ).rejects.toEqual(new AppError('Rural producer not found', 404));
  });
});
