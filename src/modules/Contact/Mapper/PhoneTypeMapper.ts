import { PhoneType as PersistencePhoneType } from '@prisma/client';
import { PhoneType } from '../Domain/PhoneType';

export class PhoneTypeMapper {
	static toDomain(raw: PersistencePhoneType) {
		const phoneType = PhoneType.create({
			type_name: raw.type_name
		}, raw.id);

		return phoneType;
	}
}