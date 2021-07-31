import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import BuildersController from '../controllers/BuildersController';

const buildersRouter = Router();
const buildersController = new BuildersController();

buildersRouter.get('/', buildersController.index);
buildersRouter.get(
  '/:builder_id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  buildersController.show
);
buildersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      website: Joi.string().required(),
      street: Joi.string().required(),
      number: Joi.string().required(),
      cep: Joi.string().required(),
      latitude: Joi.number().precision(8).required(),
      longitude: Joi.number().precision(8).required(),
      neighborhood_name: Joi.string().required(),
      neighborhood_latitude: Joi.number().precision(8).required(),
      neighborhood_longitude: Joi.number().precision(8).required(),
      city_name: Joi.string().required(),
      city_latitude: Joi.number().precision(8).required(),
      city_longitude: Joi.number().precision(8).required(),
      state_name: Joi.string().required(),
      state_latitude: Joi.number().precision(8).required(),
      state_longitude: Joi.number().precision(8).required(),
      state_uf: Joi.string().required(),
      logo: Joi.string().required()
    }
  }),
  buildersController.create
);
buildersRouter.put(
  '/:builder_id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      website: Joi.string().required(),
      street: Joi.string().required(),
      number: Joi.string().required(),
      cep: Joi.string().required(),
      latitude: Joi.number().precision(8).required(),
      longitude: Joi.number().precision(8).required(),
      neighborhood_id: Joi.string().required(),
      city_id: Joi.string().required(),
      state_id: Joi.string().required(),
      logo: Joi.string().required()
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  buildersController.update
);
buildersRouter.delete(
  '/:builder_id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  buildersController.delete
);

export default buildersRouter;
