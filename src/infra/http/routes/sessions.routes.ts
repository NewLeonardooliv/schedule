

import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { authenticateUserController } from '@infra/factories/controllers/AuthenticateUserControllerFactory';
import { Router } from 'express';

const sessions = Router();

sessions.post('/sessions', adapterRoute((authenticateUserController)));

export { sessions };
