import { Request, Response } from 'express';

import CreateBuilderService from '../services/CreateBuilderService';
import DeleteBuilderService from '../services/DeleteBuilderService';
import ListBuildersService from '../services/ListBuildersService';
import ShowBuilderService from '../services/ShowBuilderService';
import UpdateBuilderService from '../services/UpdateBuilderService';

export default class BuildersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBuilders = new ListBuildersService();

    const builders = await listBuilders.execute();

    return response.json(builders);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showBuilder = new ShowBuilderService();

    const builder = await showBuilder.execute({ id });

    return response.json(builder);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createBuilder = new CreateBuilderService();

    const builder = await createBuilder.execute({
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

    return response.json(builder);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;
    const { id } = request.params;

    const updateBuilder = new UpdateBuilderService();

    const builder = await updateBuilder.execute({
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
    });

    return response.json(builder);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteBuilderService();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}
