import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import BuildersController from '../controllers/BuildersController';

const buildersRouter = Router();
const buildersController = new BuildersController();

buildersRouter.get('/', buildersController.index);
buildersRouter.get(
  '/:id',
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
      neighborhood_id: Joi.string().required(),
      city_id: Joi.string().required(),
      state_id: Joi.string().required(),
      logo: Joi.string().required()
    }
  }),
  buildersController.create
);
buildersRouter.put(
  '/:id',
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
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  buildersController.delete
);

export default buildersRouter;
