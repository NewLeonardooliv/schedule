import { ContactRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactRepositoryPrisma';
import { FindContactByIdController } from '@modules/Contact/UseCases/FindContactById/FindContactByIdController';
import { FindContactByIdUseCase } from '@modules/Contact/UseCases/FindContactById/FindContactByIdUseCase';

const contactRepository = new ContactRepositoryPrisma();
const findContactByIdUseCase = new FindContactByIdUseCase(contactRepository);
const findContactByIdController = new FindContactByIdController(findContactByIdUseCase);

export { findContactByIdController };