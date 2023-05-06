import { prisma } from '@infra/prisma/client';
import { removerCaracteresEspeciais } from 'src/utils/Characters.util';
import { IContactAdressRepository } from '../../IContactAdressRepository';
import { ContactAdress } from '@modules/Contact/Domain/ContactAdress';
import { AdressType } from '@modules/Contact/Domain/AdressType';
import { AdressTypeMapper } from '@modules/Contact/Mapper/AdressTypeMapper';

export class ContactAdressRepositoryPrisma implements IContactAdressRepository {
	async create(id_contact: number, createContactAdressParams: ContactAdress): Promise<void> {
		await prisma.contactAdress.create({
			data: {
				id_contact: id_contact,
				city: createContactAdressParams.city,
				district: createContactAdressParams.district,
				state: createContactAdressParams.state,
				street: createContactAdressParams.street,
				zip_code: removerCaracteresEspeciais(createContactAdressParams.zip_code),
				adress_type: createContactAdressParams.adress_type,
				coutry: createContactAdressParams.coutry
			}
		});
	}

	async getAllAdressType(): Promise<AdressType[]> {
		const types = await prisma.adressType.findMany();

		return types.map(type => AdressTypeMapper.toDomain(type));
	}
}