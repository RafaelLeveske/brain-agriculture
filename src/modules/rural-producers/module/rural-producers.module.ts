import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/infra/database/database.module';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';
import { ruralProducerRepository } from '../infra/database/repositories/rural-producers.repository';
import { RuralProducersController } from '../infra/http/controllers/rural-producers.controller';
import { CreateRuralProducersService } from '../services/create-rural-producers.service';
import { ListRuralProducerDashboardService } from '../services/list-rural-producer-dashboard.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RuralProducersController],
  providers: [
    ...ruralProducerRepository,
    CreateRuralProducersService,
    ListRuralProducerDashboardService,
    RuralProducerRepositoryImplementation,
  ],
})
export class RuralProducersModule {}
