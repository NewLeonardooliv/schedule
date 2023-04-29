import { FindContactByIdUseCase } from './FindContactByIdUseCase';
import { Controller } from '@core/infra/Controller';
import { ok, fail } from '@core/infra/HttpResponse';
import { FindContactByIdResquestDto } from '@modules/Contact/Dto/FindContactByIdDto/FindContactByIdResquestDto';

export class FindContactByIdController implements Controller {
	constructor(private createContactUseCase: FindContactByIdUseCase) { }

	async handle(params: FindContactByIdResquestDto) {
		try {
			const contact = await this.createContactUseCase.execute(params.id);
			return ok(contact);
		} catch (error) {
			return fail(error);
		}
	}
}