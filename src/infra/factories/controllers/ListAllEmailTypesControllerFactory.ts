import { ContactEmailRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactEmailRepositoryPrisma';
import { ListAllEmailTypesController } from '@modules/Contact/UseCases/ListAllEmailTypes/ListAllEmailTypesController';
import { ListAllEmailTypesUseCase } from '@modules/Contact/UseCases/ListAllEmailTypes/ListAllEmailTypesUseCase';

const contactEmailRepository = new ContactEmailRepositoryPrisma();
const listAllEmailTypesUseCase = new ListAllEmailTypesUseCase(contactEmailRepository);
const listAllEmailTypesController = new ListAllEmailTypesController(listAllEmailTypesUseCase);

export { listAllEmailTypesController };