import { IContactRepository } from '@modules/Contact/Repositories/IContactRepository';
import { CreateContactPhoneUseCase } from '../CreatePhoneContact/CreateContactPhoneUseCase';
import { CreateContactEmailUseCase } from '../CreateEmailContact/CreateContactEmailUseCase';
import { CreateContactRequestDto } from '@modules/Contact/Dto/CreateContactDto/CreateContactRequestDto';
import { CreateContactAdressUseCase } from '../CreateAdressContact/CreateAdressContactUseCase';

export class CreateContactUseCase {
	constructor(
		private contactRepository: IContactRepository,
		private createContactPhoneUseCase: CreateContactPhoneUseCase,
		private createContactEmailUseCase: CreateContactEmailUseCase,
		private createContactAdressUseCase: CreateContactAdressUseCase
	) { }

	async execute({ name, surname, profile_pic, phone, email, adress }: CreateContactRequestDto) {
		const contact = await this.contactRepository.create({
			name,
			surname,
			profile_pic
		});

		phone?.map(async element => {
			await this.createContactPhoneUseCase.execute(contact.id, element);
		});

		email.forEach(async element => {
			await this.createContactEmailUseCase.execute(contact.id, element);
		});

		adress.forEach(async element => {
			await this.createContactAdressUseCase.execute(contact.id, element);
		});
	}
}