import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  name: string;
  website: string;
  street: string;
  number: string;
  cep: string;
  latitude: number;
  longitude: number;
  neighborhood_id: string;
  city_id: string;
  state_id: string;
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
