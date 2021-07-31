import { getCustomRepository } from 'typeorm';

import State from '../typeorm/entities/State';
import { StatesRepository } from '../typeorm/repositories/StatesRepository';

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  uf: string;
}

class CreateStateService {
  public async execute({
    name,
    latitude,
    longitude,
    uf
  }: IRequest): Promise<State> {
    const statesRepository = getCustomRepository(StatesRepository);
    const exists = await statesRepository.findByName(name);

    if (exists) {
      return exists;
    }

    const state = statesRepository.create({
      name,
      latitude,
      longitude,
      uf
    });

    await statesRepository.save(state);

    return state;
  }
}

export default CreateStateService;
