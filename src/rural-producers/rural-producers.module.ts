import { Module } from '@nestjs/common';
import { RuralProducersService } from './rural-producers.service';
import { RuralProducersController } from './rural-producers.controller';
import { DatabaseModule } from 'src/database.module';
import { ruralProducerProviders } from './rural-producers.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RuralProducersController],
  providers: [...ruralProducerProviders, RuralProducersService],
})
export class RuralProducersModule {}
