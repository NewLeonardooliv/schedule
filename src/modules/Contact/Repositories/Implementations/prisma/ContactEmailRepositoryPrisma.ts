import { prisma } from '@infra/prisma/client';
import { IContactEmailRepository } from '../../IContactEmailRepository';
import { ContactEmail } from '@modules/Contact/Domain/ContactEmail';

export class ContactEmailRepositoryPrisma implements IContactEmailRepository {
	async create(id_contact: number, createContactEmailParams: ContactEmail): Promise<void> {
		await prisma.contactEmail.create({
			data: {
				id_contact: id_contact,
				email: createContactEmailParams.email,
				email_type: createContactEmailParams.email_type
			}
		});
	}
}