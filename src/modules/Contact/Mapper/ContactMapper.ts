import { Contact as PersistenceContact } from '@prisma/client';
import { Contact } from '../Domain/Contact';

export class ContactMapper {
	static toDomain(raw: PersistenceContact) {
		const contact = Contact.create({
			name: raw.name,
			surname: raw.surname,
			created_at: raw.created_at,
			is_active: raw.is_active,
			profile_pic: raw.profile_pic
		}, raw.id);

		return contact;
	}
}