import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/infra/database/database.module';
import { ruralProducerProviders } from './infra/database/providers/rural-producers.providers';
import { RuralProducersController } from './infra/http/controllers/rural-producers.controller';
import { RuralProducersService } from './services/rural-producers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RuralProducersController],
  providers: [...ruralProducerProviders, RuralProducersService],
})
export class RuralProducersModule {}
