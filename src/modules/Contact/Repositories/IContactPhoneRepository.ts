import { ContactPhone } from '../Domain/ContactPhone';
import { PhoneType } from '../Domain/PhoneType';

export interface IContactPhoneRepository {
	create(id_contact: number, createContactParams: ContactPhone): Promise<void>
	getAllPhoneTypes(): Promise<PhoneType[]>;
}