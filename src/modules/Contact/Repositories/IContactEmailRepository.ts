import { ContactEmail } from '../Domain/ContactEmail';

export interface IContactEmailRepository {
	create(id_contact: number, createContactEmailParams: ContactEmail): Promise<void>
}