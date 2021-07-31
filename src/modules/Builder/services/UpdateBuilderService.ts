import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  builder_id: string;
  name: string;
  website: string;
  street: string;
  number: string;
  cep: string;
  latitude: number;
  longitude: number;
  logo: string;
}

class UpdateBuilderService {
  public async execute({
    builder_id,
    name,
    website,
    street,
    number,
    cep,
    latitude,
    longitude,
    logo
  }: IRequest): Promise<Builder> {
    const builderRepository = getCustomRepository(BuildersRepository);

    const builder = await builderRepository.findOne(builder_id);

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
    builder.logo = logo;

    await builderRepository.save(builder);

    return builder;
  }
}

export default UpdateBuilderService;
