import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type CropsPlantedType =
  | 'soy'
  | 'corn'
  | 'cotton'
  | 'coffee'
  | 'sugar_cane';

@Entity()
export class RuralProducer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  documentNumber: string;

  @Column()
  producerName: string;

  @Column()
  farmName: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  farmHectaresTotalArea: number;

  @Column()
  agriculturalHectaresArea: number;

  @Column()
  vegetationHectaresArea: number;

  @Column({
    type: 'enum',
    enum: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
  })
  cropsPlanted: CropsPlantedType;
}
