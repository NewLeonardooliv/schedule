import { Router } from 'express';
import { contact } from './contact.router';
import { user } from './user.router';
import { sessions } from './sessions.routes';
import { todo } from './todo.routes';
import { adapterMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter';
import { makeEnsureAuthenticatedMiddleware } from '@infra/factories/middlewares/EnsureAuthenticatedMiddleware';

const router = Router();

router.get('/', (req, res) => {
	return res.status(201).json({
		response: 'API Schdudle Online',
	});
});

router.use(sessions);
router.use(user);

contact.use(adapterMiddleware(makeEnsureAuthenticatedMiddleware()));
router.use(contact);
router.use(todo);


export { router };
