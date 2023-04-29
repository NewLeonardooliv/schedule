import { ContactEmailRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactEmailRepositoryPrisma';
import { CreateContactEmailUseCase } from '@modules/Contact/UseCases/CreateEmailContact/CreateContactEmailUseCase';

const contactEmailRepositoryPrisma = new ContactEmailRepositoryPrisma();
const createContactEmailUseCase = new CreateContactEmailUseCase(contactEmailRepositoryPrisma);

export { createContactEmailUseCase };