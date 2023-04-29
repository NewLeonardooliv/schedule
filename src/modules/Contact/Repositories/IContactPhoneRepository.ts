import { ContactPhone } from '../Domain/ContactPhone';

export interface IContactPhoneRepository {
	create(id_contact: number, createContactParams: ContactPhone): Promise<void>
}