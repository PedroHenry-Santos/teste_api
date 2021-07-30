import { Router } from 'express';

import buildersRouter from '@modules/Builder/routes/builders.routes';

const routes = Router();

routes.use('/builders', buildersRouter);

export default routes;
