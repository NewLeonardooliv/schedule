

import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createTaskController } from '@infra/factories/controllers/CreateTaskControllerFactory';
import { listAllkController } from '@infra/factories/controllers/ListAllTaskControllerFactory';
import { Router } from 'express';

const todo = Router();

todo.post('/todo', adapterRoute(createTaskController));
todo.get('/todo', adapterRoute(listAllkController));

export { todo };
