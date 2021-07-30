import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('builders')
class Builder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column()
  neighborhood_id: string;

  @Column()
  city_id: string;

  @Column()
  state_id: string;

  @Column()
  logo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Builder;
