import { IContactPhoneRepository } from '@modules/Contact/Repositories/IContactPhoneRepository';

export class ListAllPhoneTypesUseCase {
	constructor(private repository: IContactPhoneRepository) { }

	async execute() {
		return await this.repository.getAllPhoneTypes();
	}
}