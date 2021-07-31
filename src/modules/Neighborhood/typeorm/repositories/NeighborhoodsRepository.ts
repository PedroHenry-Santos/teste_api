import { EntityRepository, Repository } from 'typeorm';

import Neighborhood from '../entities/Neighborhood';

@EntityRepository(Neighborhood)
export class NeighborhoodsRepository extends Repository<Neighborhood> {
  public async findByName(name: string): Promise<Neighborhood | undefined> {
    const neighborhood = await this.findOne({
      where: {
        name
      },
      relations: ['cities']
    });

    return neighborhood;
  }

  public async findById(
    neighborhood_id: string
  ): Promise<Neighborhood | undefined> {
    const neighborhood = await this.findOne({
      where: {
        neighborhood_id
      },
      relations: ['cities']
    });

    return neighborhood;
  }
}
