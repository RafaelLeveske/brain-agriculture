import { Test, TestingModule } from '@nestjs/testing';
import { RuralProducersService } from '../services/rural-producers.service';

describe('RuralProducersService', () => {
  let service: RuralProducersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuralProducersService],
    }).compile();

    service = module.get<RuralProducersService>(RuralProducersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
