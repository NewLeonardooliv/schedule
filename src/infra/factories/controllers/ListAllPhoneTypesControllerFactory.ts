import { ContactPhoneRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactPhoneRepositoryPrisma';
import { ListAllPhoneTypesController } from '@modules/Contact/UseCases/ListAllPhoneTypes/ListAllPhoneTypesController';
import { ListAllPhoneTypesUseCase } from '@modules/Contact/UseCases/ListAllPhoneTypes/ListAllPhoneTypesUseCase';

const contactPhoneRepository = new ContactPhoneRepositoryPrisma();
const listAllPhoneTypesUseCase = new ListAllPhoneTypesUseCase(contactPhoneRepository);
const listAllPhoneTypesController = new ListAllPhoneTypesController(listAllPhoneTypesUseCase);

export { listAllPhoneTypesController };