import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RuralProducersModule } from 'src/modules/rural-producers/rural-producers.module';

@Module({
  imports: [ConfigModule.forRoot(), RuralProducersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
