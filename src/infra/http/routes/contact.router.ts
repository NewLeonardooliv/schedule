import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createContactController } from '@infra/factories/controllers/CreateContactControllerFactory';
import { findContactByIdController } from '@infra/factories/controllers/FindContactbyIdControllerFactory';
import { listContactController } from '@infra/factories/controllers/ListContactControllerFactory';
import { Router } from 'express';

const contact = Router();

contact.post('/contact', adapterRoute(createContactController));
contact.get('/contact', adapterRoute(listContactController));
contact.get('/contact/:id', adapterRoute(findContactByIdController));

export { contact };