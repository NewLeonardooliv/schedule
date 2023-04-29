import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createUserController } from '@infra/factories/controllers/CreateUserControllerFactory';
import { Router } from 'express';

const user = Router();

user.post('/user/register', adapterRoute(createUserController));

export { user };