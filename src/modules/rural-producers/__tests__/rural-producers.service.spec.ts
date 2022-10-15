import { Test, TestingModule } from '@nestjs/testing';
import { CreateRuralProducerDto } from '../dtos/create-rural-producer.dto';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { CreateRuralProducersService } from '../services/create-rural-producers.service';

describe('CreateRuralProducersService', () => {
  let service: CreateRuralProducersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RuralProducerRepositoryImplementation,
        CreateRuralProducersService,
        {
          provide: 'RURAL_PRODUCER_REPOSITORY',
          useValue: {
            save: jest.fn().mockResolvedValue(CreateRuralProducerDto),
          },
        },
      ],
    }).compile();

    service = module.get<CreateRuralProducersService>(
      CreateRuralProducersService,
    );
  });

  it('should be defined', async () => {
    const ruralProducer = await service.execute({
      agricultural_hectares_area: 99,
      city: 'Brasília',
      crops_planted: ['coffee'],
      document_number: '00000000000',
      farm_hectares_total_area: 202,
      farm_name: 'Test Farm',
      producer_name: 'Test Producer',
      state: 'DF',
      vegetation_hectares_area: 55,
    });
    expect(ruralProducer).toBeDefined();
  });
});
