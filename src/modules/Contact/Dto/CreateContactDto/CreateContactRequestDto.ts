import { ContactAdress } from '@modules/Contact/Domain/ContactAdress';
import { ContactEmail } from '../../Domain/ContactEmail';
import { ContactPhone } from '../../Domain/ContactPhone';

export type CreateContactRequestDto = {
	name: string
	surname: string
	profile_pic?: string
	phone?: ContactPhone[];
	email?: ContactEmail[];
	adress?: ContactAdress[];
}