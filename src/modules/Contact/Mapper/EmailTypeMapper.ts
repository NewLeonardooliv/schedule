import { EmailType as PersistenceEmailType } from '@prisma/client';
import { EmailType } from '../Domain/EmailType';

export class EmailTypeMapper {
	static toDomain(raw: PersistenceEmailType) {
		const phoneType = EmailType.create({
			type_name: raw.type_name
		}, raw.id);

		return phoneType;
	}
}