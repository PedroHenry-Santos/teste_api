import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

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

interface Neighborhood {
  name: string;
  latitude: number;
  longitude: number;
  city_id: City;
}

interface IRequest {
  name: string;
  website: string;
  street: string;
  number: string;
  cep: string;
  latitude: number;
  longitude: number;
  neighborhood_id: Neighborhood;
  city_id: City;
  state_id: State;
  logo: string;
}

class CreateBuilderService {
  public async execute({
    name,
    website,
    street,
    number,
    cep,
    latitude,
    longitude,
    neighborhood_id,
    city_id,
    state_id,
    logo
  }: IRequest): Promise<Builder> {
    const buildersRepository = getCustomRepository(BuildersRepository);
    const Exists = await buildersRepository.findByName(name);

    if (Exists) {
      throw new AppError('Name address already used.');
    }

    const builder = buildersRepository.create({
      name,
      website,
      street,
      number,
      cep,
      latitude,
      longitude,
      neighborhood_id,
      city_id,
      state_id,
      logo
    });

    await buildersRepository.save(builder);

    return builder;
  }
}

export default CreateBuilderService;
