import { Contact } from '@modules/Contact/Domain/Contact';
import { IContactRepository } from '../../IContactRepository';
import { prisma } from '@infra/prisma/client';
import { CreateContactResponseDto } from '@modules/Contact/Dto/CreateContactDto/CreateContactResponseDto';
import { FindContactByIdResponseDto } from '@modules/Contact/Dto/FindContactByIdDto/FindContactByIdResponseDto';
import { ContactMapper } from '@modules/Contact/Mapper/ContactMapper';
import { ContactWithDetailsMapper } from '@modules/Contact/Mapper/ContactWithDetailsMapper';

export class ContactRepositoryPrisma implements IContactRepository {
	async create({ name, surname, profile_pic }: Contact): Promise<CreateContactResponseDto> {
		const contactCreated = await prisma.contact.create({
			data: {
				name: name,
				surname: surname,
				profile_pic: profile_pic,
				is_active: true,
			}
		});

		return contactCreated;
	}

	async findById(id: number): Promise<FindContactByIdResponseDto> {
		const contact = await prisma.contact.findFirst({
			include: {
				contactPhone: true,
				contactEmail: true,
				contactAdress: true
			},
			where: {
				id: Number(id)
			}
		});

		return ContactWithDetailsMapper.toDto(contact);
	}

	async findAll(): Promise<Contact[]> {
		const contacts = await prisma.contact.findMany();

		return contacts.map(contact => ContactMapper.toDomain(contact));
	}
}