import { IContactRepository } from '@modules/Contact/Repositories/IContactRepository';

export class ListContactUseCase {
	constructor(private repository: IContactRepository) { }

	async execute() {
		return await this.repository.findAll();
	}
}