import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import City from '../../../City/typeorm/entities/City';
import Neighborhood from '../../../Neighborhood/typeorm/entities/Neighborhood';
import State from '../../../State/typeorm/entities/State';

@Entity('builders')
class Builder {
  @PrimaryGeneratedColumn('uuid')
  builder_id: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  cep: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(() => Neighborhood)
  @JoinColumn({ name: 'neighborhood_id' })
  neighborhood_id: Neighborhood;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;

  @OneToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state_id: State;

  @Column()
  logo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Builder;
