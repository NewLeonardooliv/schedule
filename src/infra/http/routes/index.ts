import { Router } from 'express';
import { contact } from './contact.router';
import { user } from './user.router';
import { sessions } from './sessions.routes';

const router = Router();

router.get('/', (req, res) => {
	return res.status(201).json({
		response: 'API Schdudle Online',
	});
});

router.use(sessions);
router.use(contact);
router.use(user);


export { router };
