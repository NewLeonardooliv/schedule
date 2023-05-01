import { ContactRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactRepositoryPrisma';
import { CreateContactController } from '@modules/Contact/UseCases/CreateContact/CreateContactController';
import { CreateContactUseCase } from '@modules/Contact/UseCases/CreateContact/CreateContactUseCase';
import { ContactPhoneRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactPhoneRepositoryPrisma';
import { ContactEmailRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactEmailRepositoryPrisma';
import { ContactAdressRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactAdressRepositoryPrisma';

const contactRepository = new ContactRepositoryPrisma();
const contactPhoneRepository = new ContactPhoneRepositoryPrisma();
const contactEmailRepository = new ContactEmailRepositoryPrisma();
const contactAdressRepository = new ContactAdressRepositoryPrisma();
const createContactUseCase = new CreateContactUseCase(
	contactRepository,
	contactPhoneRepository,
	contactEmailRepository,
	contactAdressRepository
);
const createContactController = new CreateContactController(createContactUseCase);

export { createContactController };