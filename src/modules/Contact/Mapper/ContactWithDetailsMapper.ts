import { ContactPhone, Contact, ContactAdress, ContactEmail } from '@prisma/client';

type PersistenceRaw = Contact & {
	contactPhone: ContactPhone[];
	contactEmail: ContactEmail[];
	contactAdress: ContactAdress[];
}

export class ContactWithDetailsMapper {
	static toDto(raw: PersistenceRaw) {
		return {
			id: raw.id,
			name: raw.name,
			surname: raw.surname,
			created_at: raw.created_at,
			is_active: raw.is_active,
			profile_pic: raw.profile_pic,
			contactPhone: raw.contactPhone.map(phone => {
				return {
					id: phone.id,
					id_contact: phone.id_contact,
					phone: phone.phone,
					phone_type: phone.phone_type
				};
			}),
			contactEmail: raw.contactEmail.map(email => {
				return {
					id: email.id,
					id_contact: email.id_contact,
					email: email.email,
					email_type: email.email_type
				};
			}),
			contactAdress: raw.contactAdress.map(adress => {
				return {
					id: adress.id,
					id_contact: adress.id_contact,
					street: adress.street,
					district: adress.district,
					city: adress.city,
					state: adress.state,
					zip_code: adress.zip_code,
					adress_type: adress.adress_type,
					coutry: adress.coutry,
				};
			})
		};

	}
}