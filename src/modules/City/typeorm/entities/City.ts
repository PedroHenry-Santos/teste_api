import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import State from '../../../State/typeorm/entities/State';

@Entity('cities')
class City {
  @PrimaryGeneratedColumn('uuid')
  city_id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state_id: State;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default City;
