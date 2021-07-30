import { getCustomRepository } from 'typeorm';

import Builder from '../typeorm/entities/Builder';
import { BuildersRepository } from '../typeorm/repositories/BuildersRepository';

class ListBuilderService {
  public async execute(): Promise<Builder[]> {
    const buildersRepository = getCustomRepository(BuildersRepository);

    const users = await buildersRepository.find();

    return users;
  }
}

export default ListBuilderService;
