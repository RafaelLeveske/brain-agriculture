import { DataSource } from 'typeorm';
import { RuralProducer } from '../entities/rural-producer.entity';

export const ruralProducerRepository = [
  {
    provide: 'RURAL_PRODUCER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RuralProducer),
    inject: ['DATA_SOURCE'],
  },
];
