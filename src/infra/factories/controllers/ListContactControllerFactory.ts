import { ContactRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactRepositoryPrisma';
import { ListContactController } from '@modules/Contact/UseCases/ListContact/ListContactController';
import { ListContactUseCase } from '@modules/Contact/UseCases/ListContact/ListContactUseCase';

const contactRepository = new ContactRepositoryPrisma();
const listContactUseCase = new ListContactUseCase(contactRepository);
const listContactController = new ListContactController(listContactUseCase);

export { listContactController };