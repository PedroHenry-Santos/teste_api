import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  id: string;
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

class UpdateBuilderService {
  public async execute({
    id,
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
    const builderRepository = getCustomRepository(BuildersRepository);

    const builder = await builderRepository.findOne(id);

    if (!builder) {
      throw new AppError('Builder not fund.', 404);
    }

    const builderExists = await builderRepository.findByName(name);

    if (builderExists) {
      throw new AppError('There is already one builder with this name.');
    }

    builder.name = name;
    builder.website = website;
    builder.street = street;
    builder.number = number;
    builder.cep = cep;
    builder.latitude = latitude;
    builder.longitude = longitude;
    builder.neighborhood_id = neighborhood_id;
    builder.city_id = city_id;
    builder.state_id = state_id;
    builder.logo = logo;

    await builderRepository.save(builder);

    return builder;
  }
}

export default UpdateBuilderService;
