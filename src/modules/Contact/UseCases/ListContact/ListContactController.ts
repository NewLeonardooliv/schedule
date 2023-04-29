import { ListContactUseCase } from './ListContactUseCase';
import { Controller } from '@core/infra/Controller';
import { ok, fail } from '@core/infra/HttpResponse';

export class ListContactController implements Controller {
	constructor(private createContactUseCase: ListContactUseCase) { }

	async handle() {
		try {
			const contacts = await this.createContactUseCase.execute();
			return ok(contacts);
		} catch (error) {
			return fail(error);
		}
	}
}