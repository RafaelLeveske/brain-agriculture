import { Module } from '@nestjs/common';
import { RuralProducersModule } from './rural-producers/rural-producers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), RuralProducersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
