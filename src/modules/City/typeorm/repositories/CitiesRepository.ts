import { EntityRepository, Repository } from 'typeorm';

import City from '../entities/City';

@EntityRepository(City)
export class CitiesRepository extends Repository<City> {
  public async findByName(name: string): Promise<City | undefined> {
    const city = await this.findOne({
      where: {
        name
      },
      relations: ['states']
    });

    return city;
  }

  public async findById(city_id: string): Promise<City | undefined> {
    const city = await this.findOne({
      where: {
        city_id
      },
      relations: ['states']
    });

    return city;
  }
}
