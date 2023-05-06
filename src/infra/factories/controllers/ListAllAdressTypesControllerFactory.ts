import { ContactAdressRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactAdressRepositoryPrisma';
import { ListAllAdressTypesController } from '@modules/Contact/UseCases/ListAllAdressTypes/ListAllAdressTypesController';
import { ListAllAdressTypesUseCase } from '@modules/Contact/UseCases/ListAllAdressTypes/ListAllAdressTypesUseCase';

const contactAdressRepository = new ContactAdressRepositoryPrisma();
const listAllAdressTypesUseCase = new ListAllAdressTypesUseCase(contactAdressRepository);
const listAllAdressTypesController = new ListAllAdressTypesController(listAllAdressTypesUseCase);

export { listAllAdressTypesController };