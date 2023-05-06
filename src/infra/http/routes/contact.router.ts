import { adapterMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter';
import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createContactController } from '@infra/factories/controllers/CreateContactControllerFactory';
import { findContactByIdController } from '@infra/factories/controllers/FindContactbyIdControllerFactory';
import { listAllAdressTypesController } from '@infra/factories/controllers/ListAllAdressTypesControllerFactory';
import { listAllEmailTypesController } from '@infra/factories/controllers/ListAllEmailTypesControllerFactory';
import { listAllPhoneTypesController } from '@infra/factories/controllers/ListAllPhoneTypesControllerFactory';
import { listContactController } from '@infra/factories/controllers/ListContactControllerFactory';
import { makeEnsureAuthenticatedMiddleware } from '@infra/factories/middlewares/EnsureAuthenticatedMiddleware';
import { Router } from 'express';

const contact = Router();

contact.use(adapterMiddleware(makeEnsureAuthenticatedMiddleware()));

contact.post('/contact', adapterRoute(createContactController));
contact.get('/contact', adapterRoute(listContactController));
contact.get('/contact/:id', adapterRoute(findContactByIdController));
contact.get('/contact/types/emailTypes', adapterRoute(listAllEmailTypesController));
contact.get('/contact/types/phoneTypes', adapterRoute(listAllPhoneTypesController));
contact.get('/contact/types/adressTypes', adapterRoute(listAllAdressTypesController));

export { contact };