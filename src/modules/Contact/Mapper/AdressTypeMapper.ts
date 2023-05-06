import { EmailType as PersistenceEmailType } from '@prisma/client';
import { AdressType } from '../Domain/AdressType';

export class AdressTypeMapper {
	static toDomain(raw: PersistenceEmailType) {
		const phoneType = AdressType.create({
			type_name: raw.type_name
		}, raw.id);

		return phoneType;
	}
}