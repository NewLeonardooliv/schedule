import { IContactRepository } from '@modules/Contact/Repositories/IContactRepository';

export class FindContactByIdUseCase {
	constructor(private repository: IContactRepository) { }

	async execute(id: number) {
		return await this.repository.findById(id);
	}
}