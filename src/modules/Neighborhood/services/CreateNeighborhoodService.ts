import { getCustomRepository } from 'typeorm';

import Neighborhood from '../typeorm/entities/Neighborhood';
import { NeighborhoodsRepository } from '../typeorm/repositories/NeighborhoodsRepository';

interface State {
  name: string;
  latitude: number;
  longitude: number;
  uf: string;
}

interface City {
  name: string;
  latitude: number;
  longitude: number;
  state_id: State;
}

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  city_id: City;
}

class CreateCityService {
  public async execute({
    name,
    latitude,
    longitude,
    city_id
  }: IRequest): Promise<Neighborhood> {
    const neighborhoodsRepository = getCustomRepository(
      NeighborhoodsRepository
    );
    const exists = await neighborhoodsRepository.findByName(name);

    if (exists && exists.city_id === city_id) {
      return exists;
    }

    const neighborhood = neighborhoodsRepository.create({
      name,
      latitude,
      longitude,
      city_id
    });

    await neighborhoodsRepository.save(neighborhood);

    return neighborhood;
  }
}

export default CreateCityService;
