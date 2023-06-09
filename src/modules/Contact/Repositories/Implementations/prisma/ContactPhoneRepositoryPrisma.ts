import { prisma } from '@infra/prisma/client';
import { IContactPhoneRepository } from '../../IContactPhoneRepository';
import { ContactPhone } from '@modules/Contact/Domain/ContactPhone';
import { removerCaracteresEspeciais } from 'src/utils/Characters.util';
import { PhoneType } from '@modules/Contact/Domain/PhoneType';
import { PhoneTypeMapper } from '@modules/Contact/Mapper/PhoneTypeMapper';

export class ContactPhoneRepositoryPrisma implements IContactPhoneRepository {
	async create(id_contact: number, createContactParams: ContactPhone): Promise<void> {
		await prisma.contactPhone.create({
			data: {
				id_contact: id_contact,
				phone: removerCaracteresEspeciais(createContactParams.phone),
				phone_type: createContactParams.phone_type
			}
		});
	}

	async getAllPhoneTypes(): Promise<PhoneType[]> {
		const types = await prisma.phoneType.findMany();

		return types.map(type => PhoneTypeMapper.toDomain(type));
	}
}