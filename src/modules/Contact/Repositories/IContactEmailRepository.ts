import { ContactEmail } from '../Domain/ContactEmail';
import { EmailType } from '../Domain/EmailType';

export interface IContactEmailRepository {
	create(id_contact: number, createContactEmailParams: ContactEmail): Promise<void>
	getAllEmailTypes(): Promise<EmailType[]>;
}