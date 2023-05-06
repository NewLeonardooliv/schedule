import { Controller } from '@core/infra/Controller';
import { ListAllAdressTypesUseCase } from './ListAllAdressTypesUseCase';
import { fail, ok } from '@core/infra/HttpResponse';


export class ListAllAdressTypesController implements Controller {
	constructor(private listAllAdressTypesUseCase: ListAllAdressTypesUseCase) { }

	async handle() {
		try {
			const result = await this.listAllAdressTypesUseCase.execute();

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