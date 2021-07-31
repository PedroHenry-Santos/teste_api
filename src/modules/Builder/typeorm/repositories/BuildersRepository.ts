import { EntityRepository, Repository } from 'typeorm';

import Builder from '../entities/Builder';

@EntityRepository(Builder)
export class BuildersRepository extends Repository<Builder> {
  public async findByName(name: string): Promise<Builder | undefined> {
    const builder = await this.findOne({
      where: {
        name
      },
      relations: ['states', 'cities', 'neighborhood']
    });

    return builder;
  }

  public async findById(builder_id: string): Promise<Builder | undefined> {
    const builder = await this.findOne({
      where: {
        builder_id
      },
      relations: ['states', 'cities', 'neighborhood']
    });

    return builder;
  }
}
