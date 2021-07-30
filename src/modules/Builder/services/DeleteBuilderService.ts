import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  id: string;
}

class DeleteBuilderService {
  public async execute({ id }: IRequest): Promise<void> {
    const builderRepository = getCustomRepository(BuildersRepository);

    const builder = await builderRepository.findOne(id);

    if (!builder) {
      throw new AppError('Builder not fund.');
    }

    await builderRepository.remove(builder);
  }
}

export default DeleteBuilderService;
