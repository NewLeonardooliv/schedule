import { ContactAdress } from '@modules/Contact/Domain/ContactAdress';
import { IContactAdressRepository } from '@modules/Contact/Repositories/IContactAdressRepository';

export class CreateContactAdressUseCase {
	constructor(private repository: IContactAdressRepository) { }

	async execute(id_contact: number, params: ContactAdress) {
		await this.repository.create(id_contact, params);
	}
}