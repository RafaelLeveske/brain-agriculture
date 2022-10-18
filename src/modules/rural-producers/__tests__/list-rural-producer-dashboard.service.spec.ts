import { Test, TestingModule } from '@nestjs/testing';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { ListRuralProducerDashboardService } from '../services/list-rural-producer-dashboard.service';

describe('ListRuralProducerDashboardService', () => {
  let service: ListRuralProducerDashboardService;
  let mockModule: TestingModule;

  beforeEach(async () => {
    mockModule = await Test.createTestingModule({
      providers: [
        RuralProducerRepositoryImplementation,
        ListRuralProducerDashboardService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            find: jest.fn().mockResolvedValue([
              {
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
              },
              {
                id: '1234',
                agriculturalHectaresArea: 99,
                city: 'Brasília',
                cropsPlanted: ['coffee', 'soy'],
                documentNumber: '036.872.311-94',
                farmHectaresTotalArea: 202,
                farmName: 'Test Farm',
                producerName: 'Test Producer',
                state: 'DF',
                vegetationHectaresArea: 55,
              },
              {
                id: '12345',
                agriculturalHectaresArea: 99,
                city: 'Brasília',
                cropsPlanted: ['coffee'],
                documentNumber: '036.872.311-94',
                farmHectaresTotalArea: 202,
                farmName: 'Test Farm',
                producerName: 'Test Producer',
                state: 'DF',
                vegetationHectaresArea: 55,
              },
            ]),
          },
        },
      ],
    }).compile();

    service = mockModule.get<ListRuralProducerDashboardService>(
      ListRuralProducerDashboardService,
    );
  });

  afterAll(async () => {
    await mockModule.close();
  });

  it('should be able to create rural producer', async () => {
    const response = await service.execute();

    expect(response).toBeDefined();
  });
});
