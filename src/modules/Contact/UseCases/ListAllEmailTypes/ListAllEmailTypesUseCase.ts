import { IContactEmailRepository } from '@modules/Contact/Repositories/IContactEmailRepository';

export class ListAllEmailTypesUseCase {
	constructor(private repository: IContactEmailRepository) { }

	async execute() {
		return await this.repository.getAllEmailTypes();
	}
}