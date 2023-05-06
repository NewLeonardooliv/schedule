import { IContactAdressRepository } from '@modules/Contact/Repositories/IContactAdressRepository';

export class ListAllAdressTypesUseCase {
	constructor(private repository: IContactAdressRepository) { }

	async execute() {
		return await this.repository.getAllAdressType();
	}
}