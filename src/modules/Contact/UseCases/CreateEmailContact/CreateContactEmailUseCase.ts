import { ContactEmail } from '@modules/Contact/Domain/ContactEmail';
import { IContactEmailRepository } from '@modules/Contact/Repositories/IContactEmailRepository';

export class CreateContactEmailUseCase {
	constructor(private repository: IContactEmailRepository) { }

	async execute(id_contact: number, params: ContactEmail) {
		await this.repository.create(id_contact, params);
	}
}