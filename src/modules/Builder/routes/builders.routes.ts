import { Router } from 'express';

import BuildersController from '../controllers/BuildersController';

const buildersRouter = Router();
const buildersController = new BuildersController();

buildersRouter.get('/', buildersController.index);

export default buildersRouter;
