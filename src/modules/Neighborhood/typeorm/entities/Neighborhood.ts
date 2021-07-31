import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import City from '../../../City/typeorm/entities/City';

@Entity('neighborhoods')
class Neighborhood {
  @PrimaryGeneratedColumn('uuid')
  neighborhood_id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @ManyToOne(() => City)
  city_id: City;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Neighborhood;
