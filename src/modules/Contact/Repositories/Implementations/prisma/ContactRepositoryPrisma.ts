import { Contact } from '@modules/Contact/Domain/Contact';
import { IContactRepository } from '../../IContactRepository';
import { prisma } from '@infra/prisma/client';
import { CreateContactResponseDto } from '@modules/Contact/Dto/CreateContactDto/CreateContactResponseDto';
import { findAllReponseDto } from '@modules/Contact/Dto/findAllDto/findAllReponseDto';
import { FindContactByIdResponseDto } from '@modules/Contact/Dto/FindContactByIdDto/FindContactByIdResponseDto';

export class ContactRepositoryPrisma implements IContactRepository {
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

		return contact;
	}

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

	async findAll(): Promise<findAllReponseDto[]> {
		const contacts = await prisma.contact.findMany();

		return contacts;
	}
}