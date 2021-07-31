import { getCustomRepository } from 'typeorm';

import City from '../typeorm/entities/City';
import { CitiesRepository } from '../typeorm/repositories/CitiesRepository';

interface State {
  name: string;
  latitude: number;
  longitude: number;
  uf: string;
}

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  state_id: State;
}

class CreateCityService {
  public async execute({
    name,
    latitude,
    longitude,
    state_id
  }: IRequest): Promise<City> {
    const citiesRepository = getCustomRepository(CitiesRepository);
    const exists = await citiesRepository.findByName(name);

    if (exists && exists.state_id === state_id) {
      return exists;
    }

    const city = citiesRepository.create({
      name,
      latitude,
      longitude,
      state_id
    });

    await citiesRepository.save(city);

    return city;
  }
}

export default CreateCityService;
