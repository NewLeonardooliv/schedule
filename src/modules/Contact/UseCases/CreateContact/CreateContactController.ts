import { CreateContactUseCase } from './CreateContactUseCase';
import { Controller } from '@core/infra/Controller';
import { created } from '@core/infra/HttpResponse';
import { fail } from '@core/infra/HttpResponse';
import { CreateContactRequestDto } from '@modules/Contact/Dto/CreateContactDto/CreateContactRequestDto';

export class CreateContactController implements Controller {
	constructor(private createContactUseCase: CreateContactUseCase) { }

	async handle({ name, surname, profile_pic, phone, email, adress }: CreateContactRequestDto) {
		try {
			await this.createContactUseCase.execute({ name, surname, profile_pic, phone, email, adress });
			return created();
		} catch (error) {
			return fail(error);
		}
	}
}