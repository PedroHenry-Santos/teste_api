import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  id: string;
}

class ShowBuilderService {
  public async execute({ id }: IRequest): Promise<Builder> {
    const buildersRepository = getCustomRepository(BuildersRepository);

    const builder = await buildersRepository.findOne(id);

    if (!builder) {
      throw new AppError('Builder not fund.', 404);
    }

    return builder;
  }
}

export default ShowBuilderService;
