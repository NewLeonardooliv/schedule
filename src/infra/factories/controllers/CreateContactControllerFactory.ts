import { ContactRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactRepositoryPrisma';
import { CreateContactController } from '@modules/Contact/UseCases/CreateContact/CreateContactController';
import { CreateContactUseCase } from '@modules/Contact/UseCases/CreateContact/CreateContactUseCase';
import { createContactPhoneUseCase } from './CreateContactPhoneControllerFactory';
import { createContactEmailUseCase } from './CreateContactEmailControllerFactory';
import { createContactAdressUseCase } from './CreateContactAdressControllerFactory';

const contactRepository = new ContactRepositoryPrisma();
const createContactUseCase = new CreateContactUseCase(
	contactRepository,
	createContactPhoneUseCase,
	createContactEmailUseCase,
	createContactAdressUseCase
);
const createContactController = new CreateContactController(createContactUseCase);

export { createContactController };