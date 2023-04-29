import { ContactPhoneRepositoryPrisma } from '@modules/Contact/Repositories/Implementations/prisma/ContactPhoneRepositoryPrisma';
import { CreateContactPhoneUseCase } from '@modules/Contact/UseCases/CreatePhoneContact/CreateContactPhoneUseCase';

const contactPhoneRepositoryPrisma = new ContactPhoneRepositoryPrisma();
const createContactPhoneUseCase = new CreateContactPhoneUseCase(contactPhoneRepositoryPrisma);

export { createContactPhoneUseCase };