import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

interface IRequest {
  builder_id: string;
}

class DeleteBuilderService {
  public async execute({ builder_id }: IRequest): Promise<void> {
    const builderRepository = getCustomRepository(BuildersRepository);

    const builder = await builderRepository.findOne(builder_id);

    if (!builder) {
      throw new AppError('Builder not fund.');
    }

    await builderRepository.remove(builder);
  }
}

export default DeleteBuilderService;
