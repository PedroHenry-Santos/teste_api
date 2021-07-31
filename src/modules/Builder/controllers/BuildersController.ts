import { Request, Response } from 'express';

import ListBuildersService from '../services/ListBuildersService';

export default class BuildersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBuilders = new ListBuildersService();

    const builders = await listBuilders.execute();

    return response.json(builders);
  }
}
