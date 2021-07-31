import { Request, Response } from 'express';

import CreateCityService from '../../City/services/CreateCityService';
import CreateNeighborhoodService from '../../Neighborhood/services/CreateNeighborhoodService';
import CreateStateService from '../../State/services/CreateStateService';
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
    const { builder_id } = request.params;

    const showBuilder = new ShowBuilderService();

    const builder = await showBuilder.execute({ builder_id });

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
      neighborhood_name,
      neighborhood_latitude,
      neighborhood_longitude,
      city_name,
      city_latitude,
      city_longitude,
      state_name,
      state_latitude,
      state_longitude,
      state_uf,
      logo
    } = request.body;

    const createState = new CreateStateService();

    const state = await createState.execute({
      name: state_name,
      latitude: state_latitude,
      longitude: state_longitude,
      uf: state_uf
    });

    const createCity = new CreateCityService();

    const city = await createCity.execute({
      name: city_name,
      latitude: city_latitude,
      longitude: city_longitude,
      state_id: state
    });

    const createNeighborhood = new CreateNeighborhoodService();

    const neighborhood = await createNeighborhood.execute({
      name: neighborhood_name,
      latitude: neighborhood_latitude,
      longitude: neighborhood_longitude,
      city_id: city
    });

    const createBuilder = new CreateBuilderService();

    const { builder_id } = await createBuilder.execute({
      name,
      website,
      street,
      number,
      cep,
      latitude,
      longitude,
      neighborhood_id: neighborhood,
      city_id: city,
      state_id: state,
      logo
    });

    return response.status(201).json({
      builder_id,
      logo,
      city_id: city.city_id,
      state_id: state.state_id
    });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, website, street, number, cep, latitude, longitude, logo } =
      request.body;
    const { builder_id } = request.params;

    const updateBuilder = new UpdateBuilderService();

    const builder = await updateBuilder.execute({
      builder_id,
      name,
      website,
      street,
      number,
      cep,
      latitude,
      longitude,
      logo
    });

    return response.json(builder);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { builder_id } = request.params;

    const deleteProduct = new DeleteBuilderService();

    await deleteProduct.execute({ builder_id });

    return response.json([]);
  }
}
