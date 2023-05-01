import { ListContactUseCase } from './ListContactUseCase';
import { Controller } from '@core/infra/Controller';
import { ok, fail } from '@core/infra/HttpResponse';

export class ListContactController implements Controller {
	constructor(private createContactUseCase: ListContactUseCase) { }

	async handle() {
		try {
			const result = await this.createContactUseCase.execute();

			const contacts = result.map(contact => {
				return {
					id: contact.id,
					name: contact.props.name,
					surname: contact.props.surname,
					created_at: contact.props.created_at,
					is_active: contact.props.is_active,
					profile_pic: contact.props.profile_pic
				};
			});

			return ok(contacts);
		} catch (error) {
			return fail(error);
		}
	}
}