import { ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppError } from 'src/shared/errors/app-error';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { DestroyRuralProducersService } from '../services/destroy-rural-producers.service';

describe('DestroyRuralProducersService', () => {
  let service: DestroyRuralProducersService;
  let mockModule: TestingModule;
  let mockSuccessModuleMetadata: ModuleMetadata;
  let mockFailedModuleMetadata: ModuleMetadata;

  beforeEach(async () => {
    mockSuccessModuleMetadata = {
      providers: [
        RuralProducerRepositoryImplementation,
        DestroyRuralProducersService,
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
            delete: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    };

    mockFailedModuleMetadata = {
      providers: [
        RuralProducerRepositoryImplementation,
        DestroyRuralProducersService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            findOne: jest.fn().mockResolvedValue(null),
            delete: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    };
  });

  afterAll(async () => {
    await mockModule.close();
  });

  it('should be able to delete rural producer', async () => {
    mockModule = await Test.createTestingModule(
      mockSuccessModuleMetadata,
    ).compile();

    service = mockModule.get<DestroyRuralProducersService>(
      DestroyRuralProducersService,
    );

    const ruralProducer = await service.execute('123');
    expect(ruralProducer.message).toBe('Rural Producer deleted');
  });

  it('should not be able to delete rural producer if the rural producer is not found', async () => {
    mockModule = await Test.createTestingModule(
      mockFailedModuleMetadata,
    ).compile();

    service = mockModule.get<DestroyRuralProducersService>(
      DestroyRuralProducersService,
    );

    await expect(service.execute('123')).rejects.toEqual(
      new AppError('Rural producer not found', 404),
    );
  });
});
