import { EntityRepository, Repository } from 'typeorm';

import Builder from '../entities/Builder';

@EntityRepository(Builder)
export class BuildersRepository extends Repository<Builder> {
  public async findByName(name: string): Promise<Builder | undefined> {
    const builder = await this.findOne({
      where: {
        name
      }
    });

    return builder;
  }

  public async findById(id: string): Promise<Builder | undefined> {
    const builder = await this.findOne({
      where: {
        id
      }
    });

    return builder;
  }
}
