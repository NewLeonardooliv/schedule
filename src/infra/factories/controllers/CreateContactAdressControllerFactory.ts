import { ContactAdressRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactAdressRepositoryPrisma';
import { CreateContactAdressUseCase } from '@modules/Contact/UseCases/CreateAdressContact/CreateAdressContactUseCase';

const contactAdressRepositoryPrisma = new ContactAdressRepositoryPrisma();
const createContactAdressUseCase = new CreateContactAdressUseCase(contactAdressRepositoryPrisma);

export { createContactAdressUseCase };