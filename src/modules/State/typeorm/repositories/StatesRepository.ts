import { EntityRepository, Repository } from 'typeorm';

import State from '../entities/State';

@EntityRepository(State)
export class StatesRepository extends Repository<State> {
  public async findByName(name: string): Promise<State | undefined> {
    const state = await this.findOne({
      where: {
        name
      }
    });

    return state;
  }

  public async findById(state_id: string): Promise<State | undefined> {
    const state = await this.findOne({
      where: {
        state_id
      }
    });

    return state;
  }
}
