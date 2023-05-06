import { Controller } from '@core/infra/Controller';
import { ListAllPhoneTypesUseCase } from './ListAllPhoneTypesUseCase';
import { fail, ok } from '@core/infra/HttpResponse';


export class ListAllPhoneTypesController implements Controller {
	constructor(private createContactUseCase: ListAllPhoneTypesUseCase) { }

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