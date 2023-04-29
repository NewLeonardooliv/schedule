import { ContactPhone } from '@modules/Contact/Domain/ContactPhone';
import { IContactPhoneRepository } from '@modules/Contact/Repositories/IContactPhoneRepository';

export class CreateContactPhoneUseCase {
	constructor(private repository: IContactPhoneRepository) { }

	async execute(id_contact: number, params: ContactPhone) {
		await this.repository.create(id_contact, params);
	}
}