import { Controller } from '@core/infra/Controller';
import { ListAllEmailTypesUseCase } from './ListAllEmailTypesUseCase';
import { fail, ok } from '@core/infra/HttpResponse';


export class ListAllEmailTypesController implements Controller {
	constructor(private createContactUseCase: ListAllEmailTypesUseCase) { }

	async handle() {
		try {
			const result = await this.createContactUseCase.execute();

			const contactTypes = result.map(type => {
				return {
					id: type.id,
					name: type.props.type_name,
				};
			});
			return ok(contactTypes);
		} catch (error) {
			return fail(error);
		}
	}
}